import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Album = () => {
	const [photo, setPhoto] = useState([]);
        const [loading, setLoading] = useState(false)
    

	useEffect(() => {
        setLoading(true);
		axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
			setPhoto(res.data);
            setLoading(false)
		});
	}, []);

	return (
		<>
			{loading && <p className="loading">Loading......</p>}<div className="container">
				{photo.map((item) => (
					<div className="card" key={item.id}> 
						<h2 className="card-title">{item.title}</h2>
						<img src={item.thumbnailUrl} alt="image" />
					</div>
				))}
			</div>
		</>
	);
};

export default Album;
