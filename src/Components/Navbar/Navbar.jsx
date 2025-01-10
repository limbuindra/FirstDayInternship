import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<div className="container">
			{data.map((item) => (
				<div className="card" key={item.id}>
					<h2 className="card-title">ID: {item.id}</h2>
					<hr />
					<div className="body">
						<p className="card-body">Name: {item.name}</p>
						<p>Username: {item.username}</p>
						<p>Email: {item.email}</p>
					</div>
					<Link to={`/${item.id}`} className="details-link"> {/* Link to user details */}
						View Details
					</Link>
				</div>
			))}
		</div>
	);
};

export default Navbar;
