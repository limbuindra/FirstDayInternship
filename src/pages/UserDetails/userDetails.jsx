import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetails = () => {
	const { id } = useParams(); 
	console.log(id)
	const [user, setUser] = useState(null);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				setUser(res.data);
                console.log(res.data)
			});
	}, [id]);

	if (!user) return <p className="loading">Loading...</p>; 

	return (
		<div className="user-details">
			<h1>User Details</h1>
			<p>
				<strong>ID:</strong> {user.id}
			</p>
			<p>
				<strong>Name:</strong> {user.name}
			</p>
			<p>
				<strong>Username:</strong> {user.username}
			</p>
			<p>
				<strong>Email:</strong> {user.email}
			</p>
			<p>
				<strong>Phone:</strong> {user.phone}
			</p>
			<p>
				<strong>Website:</strong> {user.website}
			</p>
			<p>
				<strong>Company:</strong> {user.company.name}
			</p>
			<p>
				<strong>Address:</strong>{" "}
				{`${user.address.street}, ${user.address.city}`}
			</p>
		</div>
	);
};

export default UserDetails;
