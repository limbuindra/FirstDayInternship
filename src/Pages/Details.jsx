import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch }from "react-redux";
import { addToCart } from "../stores/cart";

const Details = () => {
	const { id } = useParams();
	const [detail, setDetail] = useState(null);
  const[quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((res) => {
				setDetail(res.data);
			})
			.catch((error) => console.error("Error fetching product:", error));
	}, [id]);

	if (!detail) return <div>Loading...</div>;
const handleMinusQuantity=()=>{
setQuantity(quantity-1<1 ?1 :quantity-1 )
}
const handlePlusQuantity=()=>{
setQuantity(quantity +1)
}

const handleAddToCart=()=>{
  dispatch(addToCart({

    productId : detail.id,
    quantity:quantity
  }))
}
	return (
		<div>
			<h2 className="text-3xl text-center">Product Details</h2>
			<div className="grid grid-cols-2 gap-4 mt-10">
				<div className="flex justify-center">
					<img src={detail.image} alt="" className="bg-transparent m-0 p-0 inline-block " height="450px"
						width="400px"/>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="font-bold text-4xl uppercase ">
						 {detail.title}
					</h1>

					<p className="font-bold text-3xl">
						 ${detail.price}
					</p>
						<p className="font-bold text-2xl uppercase">
							 {detail.category}
						</p>
					<div className="flex gap-5  items-center">
            <div className="flex gap-2 mt-3 justify-center items-center">
              <button className="bg-gray-300 h-full w-10 font-bold text-2xl rounded-xl flex justify-center items-center " onClick={handleMinusQuantity }>-</button>
              <span className="bg-gray-400 h-full w-10 font-bold text-2xl rounded-xl flex justify-center items-center">{quantity}</span>
              <button className="bg-gray-300 h-full w-10 font-bold text-2xl rounded-xl flex justify-center items-center"onClick={handlePlusQuantity}>+</button>
            </div>
            <button className="bg-slate-800 py-3 px-6 rounded-2xl text-white" onClick={handleAddToCart}>Add To Cart</button>
					</div>
          <p>{detail.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
