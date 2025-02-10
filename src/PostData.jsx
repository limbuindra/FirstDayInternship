import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const createPost = async (newPost) => {
	const response = await axios.post("http://localhost:3000/users", newPost);
	return response.data;
};

const PostData = ({id}) => {
	const [addData, setAddData] = useState("");

	const queryClient = useQueryClient();
	// const {data}= useQuery("users", fetchUsers);
	const { data, isLoading, error } = useQuery({
		queryKey: ["users",id],
		// queryFn: fetchUsers,
		queryFn: () =>
			fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
				res.json()
			),
		staleTime: 5000,
	});
	//mutation
	// const mutation = useMutation({
	// 	mutationFn: createPost,
	// 	onSuccess: (data) => {
	// 		queryClient.setQueryData(["posts"], (oldData) => [...oldData, data]);
	// 		alert("Post Created");
	// 	},
	// 	onError: (error) => {
	// 		console.error("Error:", error);
	// 		alert("Failed to create post.");
	// 	},
	// });

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	console.log("Fetch DAta", data[0]);

    const handleSubmit=()=>{
        mutation.mutate({ addData, body: "This is a new post" });
    }
	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<input value={addData} type="text" onChange={(e) => setAddData(e.target.value)} />
					<button type="submit">Add </button>
				</form>
			</div>
			{/* <ul>
				{data?.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul> */}
			{data.name}
		</>
	);
};

export default PostData;
