import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Define Post type
interface Post {
  id: number;
  title: string;
}

// Define props for UpdatePost component
interface UpdatePostProps {
  post: Post;
  onClose: () => void;
}

// Function to update a post
const updatePost = async ({ id, title }: Post): Promise<Post> => {
  const response = await axios.put<Post>(`http://localhost:3000/users/${id}`, {
    title,
  });
  return response.data;
};

const UpdatePost: React.FC<UpdatePostProps> = ({ post, onClose }) => {
  const [title, setTitle] = useState<string>(post.title);
  const queryClient = useQueryClient();

  // Use mutation with TypeScript types
  const mutation = useMutation<Post, Error, Post>({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      queryClient.setQueryData<Post[]>(["users"], (oldData) =>
        oldData ? oldData.map((p) => (p.id === updatedPost.id ? updatedPost : p)) : []
      );
      onClose();
    },
    onError: () => {
      alert("Failed to update post");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ id: post.id, title });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
        <h3 className="text-xl font-semibold mb-4">Edit Post</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded-md"
          />
          <div className="flex justify-end gap-3">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Update
            </button>
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
