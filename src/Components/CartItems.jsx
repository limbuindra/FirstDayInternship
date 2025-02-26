import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";

const CartItems = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null); 
  const dispatch =useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setDetail(res.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

const handleMinusCart=()=>{
    dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1
    }))
}
const handlePlusCart=()=>{
    dispatch(changeQuantity({
        productId: productId,
        quantity: quantity + 1
    }))
}


  if (!detail) return <div>Loading...</div>;

  return (
    <div className="flex justify-between items-center bg-slate-100 p-2 border-b mb-4 border-slate-700">
      <img
        src={detail.image}
        alt={detail.title}
        className="w-20 h-20 object-contain"
      />
      <h3>{detail.title}</h3>
      <p>${(detail.price * quantity).toFixed(2)}</p>
      <div className="w-20 flex justify-between">
        <button className="bg-gray-200 rounded-full w-7 h-7 text-xl text-cyan-700" onClick={handleMinusCart}>-</button>
        <span>{quantity}</span>
        <button className="bg-gray-200 rounded-full w-7 h-7 text-xl text-cyan-700" onClick={handlePlusCart}>+</button>
      </div>
    </div>
  );
};

export default CartItems;
