import React, { useState, useRef, useEffect } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, addUser, updateUser, deleteUser } from "../Services/api.tsx";

type User = {
  id: number;
  name: string;
};

const Users: React.FC = () => {
  const [newName, setNewName] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const queryClient = useQueryClient();

  // Infinite Query for paginated data
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam = 1 }) => fetchUsers(pageParam, 4), // Fetch 5 users at a time
	getNextPageParam: (lastPage, allPages) => {
		return lastPage.length === 10 ? allPages.length + 1 : undefined; 
	  },
	  
  });

  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) => updateUser(id, name),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      updateMutation.mutate({ id: editingUser.id, name: newName });
      setEditingUser(null);
    } else if (newName) {
      addMutation.mutate(newName);
    }
    setNewName("");
  };

  // Intersection Observer for Auto Load More
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
	if (!loadMoreRef.current) return;
  
	const observer = new IntersectionObserver(
	  (entries) => {
		if (entries[0].isIntersecting && hasNextPage) {
		  fetchNextPage();
		}
	  },
	  { root: null, rootMargin: "0px", threshold: 1.0 }  // Adjust if needed
	);
  
	observer.observe(loadMoreRef.current);
  
	return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);
  

  if (isLoading) return <p>Loading users...</p>;

  return (
    <div className="max-w-xl shadow-2xl mx-auto mt-5 p-5 flex flex-col gap-4 bg-white rounded-lg">
      <form onSubmit={handleSubmit} className="flex gap-3 w-full">
        <input
          className="border border-gray-300 p-2 rounded-lg w-full text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={newName}
          type="text"
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter user name"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          {editingUser ? "Update" : "Add"}
        </button>
      </form>

      {/* Fixed height with scrolling */}
      <div className="h-80 overflow-y-auto border border-gray-300 rounded-lg">
        <ul className="p-2">
          {data?.pages.flatMap((page) =>
            page.map((user: User) => (
              <li key={user.id} className="border-b border-slate-200">
                <div className="flex justify-between p-2">
                  <div className="text-gray-800 font-medium">{user.name}</div>
                  <div className="space-x-2">
                    <button
                      className="bg-green-500 px-4 py-2 rounded-xl text-white hover:bg-green-600 transition"
                      onClick={() => setEditingUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 px-4 py-2 rounded-xl text-white hover:bg-red-600 transition"
                      onClick={() => deleteMutation.mutate(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))
		)}
        </ul>
        <div ref={loadMoreRef} className="h-2"></div> {/* Observer target */}
      </div>

      {isFetchingNextPage && <p className="text-center mt-2">Loading more users...</p>}
    </div>
  );
};

export default Users;
