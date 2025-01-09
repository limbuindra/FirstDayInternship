import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Post = () => {
	const [post, postData] = useState([]);
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
			postData(res.data);
		});
	}, []);

	return (
		<>
			<div className="container">
				{post.map((item) => (
					<div className="card" key={item.id}>
						
						<h2 className="card-title">{item.title}</h2>
						<p className="card-body">{item.body}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Post;
