import { useState } from "react";
import "./App.css";
// import Main from "./Component/Main";

import { io } from "socket.io-client";
import Chat from "./Chat";
import Sidebar from "./Component/Sidebar";
import ChatWindow from "./Component/ChatWindow";
import {Routes,Route} from "react-router-dom"
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<>
			{/* <Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register/>} />
				<Route path="/chat" element={<Chat/>}/>

			</Routes> */}

			<Chat/>
			{/* <div className="flex h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <ChatWindow />

      <button
        className="lg:hidden absolute top-4 left-4 bg-blue-500 text-white p-2 rounded-full"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>
    </div> */}
			{/* <Main socket={socket} /> */}
		</>
	);
}

export default App;
