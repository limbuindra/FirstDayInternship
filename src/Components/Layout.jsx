import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
	return (
		<div className=" h-full">
			<main className="w-[1500px] max-w-full m-auto p-5 ">
				<Header />
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
