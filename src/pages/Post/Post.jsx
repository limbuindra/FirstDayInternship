import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../Components/Pagination/Pagination";

const Post = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 8;

	const fetchData = async () => {
		try {
			setLoading(true);

			const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
			setPosts(res.data);
			console.log(res.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	if (loading)
		return (
			<p className="loading" style={{ minHeight: "100vh" }}>
				Loading....
			</p>
		);
	if (error) return <p>Error: {error}</p>;
	return (
		<div>
			<div className="container">
				{currentPosts.map((item) => (
					<div className="card" key={item.id}>
						<h1 className="card-id">{item.id}</h1>
						<h2 className="card-title">{item.title}</h2>
						<p className="card-body">{item.body}</p>
					</div>
				))}
			</div>
			<Pagination
				totalItems={posts.length}
				itemsPerPage={postsPerPage}
				currentPage={currentPage}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
};

export default Post;
