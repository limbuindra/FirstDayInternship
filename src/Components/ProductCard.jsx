import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	const { id, title, image, price } = props.item;
	const carts = useSelector((store) => store.cart.items);
	console.log(carts);
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				productId: id,
				quantity: 1,
			})
		);
	};

	return (
		<>
			<div className="relative group">
				<div className="p-8 h-full bg-white border border-slate-300 rounded-xl shadow-2xl transition duration-300  ">
					{/* group-hover:blur-xs */}
					<Link to={`/details/${id}`}>
						<div className="flex items-center justify-center">
							<img
								className="w-full h-80 object-contain m-0"
								src={image}
								alt={title}
							/>
						</div>
						<h3 className="font-bold text-2xl text-center py-3">
							{title.length > 20 ? title.slice(0, 20) + "..." : title}
						</h3>
					</Link>
					<div className="flex justify-between items-center">
						<p>
							<span className="font-medium text-2xl">${parseInt(price)}</span>
						</p>
						<button
							onClick={handleAddToCart}
							className="bg-slate-400 p-3 rounded-md text-sm hover:bg-gray-500 hover:text-white flex items-center gap-2"
						>
							<IoCartOutline /> Add to Cart
						</button>
					</div>
				</div>
			</div>
			{/* <div className="absolute inset-0 flex justify-center items-center opacity-1 group-hover:opacity-200  transition duration-100 hover:border hover:border-slate-300 hover:rounded-2xl">
        <div className="flex gap-4 items-center justify-center">
			<div className="text-slate-600 bg-white rounded-full p-2 text-2xl">

          <FaFacebookF  />
			</div>
			<div className="text-slate-700 bg-white rounded-full p-2 text-2xl">

          <FaLinkedinIn  />
			</div>
        </div>
      </div> */}
		</>
	);
};

export default ProductCard;
