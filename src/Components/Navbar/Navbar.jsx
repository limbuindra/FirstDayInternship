import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";

const Navbar = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			setData(res.data);
			console.log(data);
		});
	}, []);

	return (
		<>
			<div className="container">
				{data.map((item) => (
					<div className="card" key={item.id}>
						<h2 className="card-title">ID: {item.id}</h2> <hr/>
						<div className="body">

						<p className="card-body">Name: {item.name}</p>
						<p>Username: {item.username}</p>
						<p>Email: {item.email}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Navbar;
