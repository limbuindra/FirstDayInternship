import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MainPage from './Pages/MainPage/MainPage'
import SuccessPage from './Pages/SuccessPage/SuccessPage'
import {Routes, Route, useLocation} from "react-router-dom"

const App = () => {
	const location = useLocation();
  
	// Check if the current route is the success page
	const isSuccessPage = location.pathname === "/success";
  return (
	<div>
		{!isSuccessPage && <Header />}
		<Routes>
		<Route path="/" element={<MainPage/>} />
		<Route path="/success" element={<SuccessPage/>}/>
		</Routes>
		{!isSuccessPage && <Footer />}
	</div>
  )
}

export default App