import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartTab = () => {
	const carts = useSelector((store) => store.cart.items);

	return (
		<>
			<h1 className="text-3xl font-semibold text-center mb-10">Shopping Cart</h1>

			{carts.map((item, key) => (
				<CartItems data={item}  key={key}/>
			))}
		</>
	);
};

export default CartTab;
