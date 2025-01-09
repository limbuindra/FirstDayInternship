import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
					<ul className="navbar">
						<li className="Link ">
							<Link className="button"  to="/">Users</Link>
						</li>

						<li className="Link">
							<Link className="button" to="post">Posts</Link>
						</li>
            <li className="Link">
							<Link className="button" to="album">Albums</Link>
						</li>
					</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
