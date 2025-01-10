import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Album = () => {
	const [photo, setPhoto] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
			setPhoto(res.data);
			setLoading(false);
			console.log(res.data)
		});
	}, []);

	return (
		<>
			{loading && <p className="loading">Loading......</p>}
			<div className="container">
				{photo.map((album) => (
					<>
						<div className="card" key={album.id}>
							<h2 className="card-title">{album.title}</h2>
							<div className="body">

							<img src={album.thumbnailUrl} alt="image" />
							</div>
							<Link to={`/album/${album.id}`} className="details-link">
								Album Details
							</Link>
						</div>
					</>
				))}
			</div>
		</>
	);
};

export default Album;
