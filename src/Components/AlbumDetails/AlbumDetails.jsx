import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AlbumDetails = () => {
	const { albumId } = useParams();
	const [album, setAlbum] = useState([]);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/photos/${albumId}`)
			.then((res) => {
				setAlbum(res.data);
				console.log(res.data);
			});
	}, [albumId]);
	return (
		<>
			<div className="album-details">
				<h1>Album Details</h1>
				<h2>{album.title}</h2>
				<img src={album.url} alt={album.title} />
				<p>Photo ID: {album.id}</p>
				<p>Album ID: {album.albumId}</p>
			</div>
		</>
	);
};

export default AlbumDetails;
