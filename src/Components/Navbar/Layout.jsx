import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { ColorContext } from "../../App";

const Layout = () => {
	const { toggleBackgroundColor } = useContext(ColorContext);
	return (
		<>
			<nav className="navbar">
				<ul className="nav">
					<li className="Link ">
						<Link className="button" to="/">
							Users
						</Link>
					</li>

					<li className="Link">
						<Link className="button" to="/post">
							Posts
						</Link>
					</li>
					<li className="Link">
						<Link className="button" to="/album">
							Albums
						</Link>
					</li>
				</ul>
				<button
					onClick={toggleBackgroundColor}
					className="button-color"
				>
					Dark Mode
				</button>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
