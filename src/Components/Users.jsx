import {
	isError,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import UpdatePost from "../Button/UpdatePost";
import DeletePost from "../Button/DeletePost";

const createPost = async (newPost) => {
	const response = await axios.post("http://localhost:3100/users", newPost);
	return response.data;
};
const fetchUsers = async (page) => {
	console.log(`Fetching Page: ${page}`);
	const response = await axios.get(
		`http://localhost:3100/users?_page=${page}&_limit=${5 * page}`
	);
	console.log("Response", response.data);
	return response.data;
};

const Users = () => {
	const [title, setTitle] = useState("");
	const [updated, setUpdated] = useState(null);
	const [page, setPage] = useState(1);

	const queryClient = useQueryClient();
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["users", page],
		queryFn: () => fetchUsers(page),
		keepPreviousData: true,

		staleTime: 5000,
		// onSuccess: () => {
		// 	queryClient.invalidateQueries(["users"]);
		// },
	});

	const mutation = useMutation({
		mutationFn: createPost,
	});

	if (isLoading)
		return <p className="text-center text-4xl text-gray-600">Loading...</p>;
	if (isError)
		return <p className="text-center text-red-500">Error: {error.message}</p>;

	const handleSubmit = (e) => {
		e.preventDefault();
		mutation.mutate({ title, body: "This is a new post" });
		setTitle("");
	};

	return (
		<>
			<div className="max-w-xl shadow-2xl mx-auto mt-5 p-5 flex flex-col gap-4 bg-white rounded-lg">
				<form onSubmit={handleSubmit} className="flex gap-3 w-full">
					<input
						className="border border-gray-300 p-2 rounded-lg w-full text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
						value={title}
						type="text"
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter post title"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
					>
						Add
					</button>
				</form>
				<div className="flex flex-col gap-2">
					<ul>
						{data?.length > 0 ? (
							data.slice(5 * page - 5, 5 * page).map((user) => (
								<li
									key={user.id}
									className="flex justify-between items-center p-3 rounded-lg shadow-sm hover:bg-gray-200 transition-all"
								>
									<div className="text-gray-800 font-medium">{user.title}</div>
									<div className="flex gap-3">
										<DeletePost userId={user.id} />
										<button
											onClick={() => setUpdated(user)}
											className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
										>
											Edit
										</button>
									</div>
								</li>
							))
						) : (
							<p className="text-center text-gray-500">No users found.</p>
						)}
					</ul>
				</div>
			</div>
			<div className="flex justify-center gap-10 mt-6">
				<button
					onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
					disabled={page === 1}
					className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
				>
					Previous
				</button>

				<span className="mt-2">Page {page}</span>

				<button
					onClick={() => setPage((prev) => prev + 1)}
					disabled={data.length < 5 * page}
					className="px-4 py-2  bg-blue-500 text-white rounded"
				>
					Next
				</button>
			</div>
			{updated && (
				<UpdatePost post={updated} onClose={() => setUpdated(null)} />
			)}
		</>
	);
};

export default Users;
