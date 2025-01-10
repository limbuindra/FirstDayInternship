import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
	.then((res) => {
      setPosts(res.data);
    });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

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
