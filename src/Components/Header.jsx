import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const [totalQuantity, setTotalQuantity] = useState(0);
	const carts = useSelector((store) => store.cart.items);
	useEffect(() => {
		let total = 0;
		carts.forEach((item) => (total += item.quantity));
		setTotalQuantity(total);
	}, [carts]);

	const handleCart = () => {
		navigate("/cart");
	};
	return (
		<>
			<nav className="flex justify-between items-center mb-5">
				<Link to="/" className="text-3xl font-semibold">
					Home
				</Link>
				<div className="flex gap-4 justify-center items-center">
                        <Link to="/login" className="bg-slate-700 py-2 px-6 rounded-xl text-white text-xl">Login</Link>
					<div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative">
						<IoCartOutline onClick={handleCart} className="text-2xl" />
						<span
							className="absolute -top-1 left-7 bg-red-400 text-white text-sm
                w-5 h-5 rounded-full flex justify-center items-center"
						>
							{totalQuantity}
						</span>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
