import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import './Navbar.css';

const Navbar = () => {
	const [data, setData] = useState([]);
		const [loading, setLoading] = useState(false);
		const [error, setError] = useState(null);

		const fetchData = async () => {
			try {
				setLoading(true);

				const res = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				setData(res.data);
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

		if (loading) return <p className="loading">Loading....</p>;
		if (error) return <p>Error: {error}</p>;
	return (
		<>
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
					<Link to={`/${item.id}`} className="details-link">
						User Details
					</Link>
				</div>
			))}
		</div>
			</>
	);
};

export default Navbar;
