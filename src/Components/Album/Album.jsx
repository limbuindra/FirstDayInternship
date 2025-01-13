import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Album = () => {
	const [photo, setPhoto] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 12;

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/photos"
			);
			setPhoto(res.data);
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

	const offset = currentPage * itemsPerPage;
	const currentItems = photo.slice(offset, offset + itemsPerPage);

	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
	};

	return (
		<>
			<div className="container">
				{currentItems.map((album) => (
					<div className="card" key={album.id}>
						<h2 className="card-title">{album.title}</h2>
						<div className="body">
							<img src={album.thumbnailUrl} alt="album thumbnail" />
						</div>
						<Link to={`/album/${album.id}`} className="details-link">
							Album Details
						</Link>
					</div>
				))}
			</div>
			<ReactPaginate
				previousLabel={"Previous"}
				nextLabel={"Next"}
				breakLabel={"...."}
				pageCount={Math.ceil(photo.length / itemsPerPage)} 
				marginPagesDisplayed={2} 
				pageRangeDisplayed={3} 
				onPageChange={handlePageClick} 
				containerClassName={"pagination"} 
				pageClassName={"page-item"} 
				pageLinkClassName={"page-link"} 
				previousClassName={"page-item"} 
				previousLinkClassName={"page-link"} 
				nextClassName={"page-item"} 
				nextLinkClassName={"page-link"} 
				activeClassName={"active"}
			/>
		</>
	);
};

export default Album;
