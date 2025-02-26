import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";

const Home = () => {
	const [data, setData] = useState([]);

	const fetchData = () => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => setData(res.data));
	};
	console.log(data);
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<div>
				<h1 className="text-3xl my-5 text-center font-semibold">List Products</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center ">
					{data.map((item, id) => (

						<ProductCard key={id} item={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
