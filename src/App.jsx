import React,{useState} from "react";
import Users from "./Users";
// import PostData from "./PostData";
import CreatePost from "./CreatePost";
import {Routes, Route} from "react-router-dom"
import Homepage from "./Pages/Homepage";
const App = () => {
const [isMounted, setIsMounted] = useState(true);

	return(
     <>
  {/*
 <PostData id={4}/> 
 */}
 {/* <CreatePost/> */}
 {/* <button onClick={()=> setIsMounted((prev)=> !prev)}>Toggle</button>
{isMounted && <Users/>} */}
{/* <Routes>

<Route path="/" element={<Users/>}/>

</Routes> */}
<Homepage/>

  </>
  )
};

export default App;
