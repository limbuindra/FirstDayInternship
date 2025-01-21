import React, { createContext, useState } from 'react';

export const MyContext = createContext();


const Context = ({children}) => {
    const [toggle, setToggle] = useState(false);
	const toggleBackgroundColor = () => {
		setToggle((prevTheme) => !prevTheme);
	};

    const backgroundImage = toggle
    ? 'url("src/assets/bg-desktop-dark.jpg")' 
    :  'url("src/assets/bg-desktop-light.jpg")'; 
  
    const backgroundColor = toggle ? "#333 " : "#fff";
    const textColor = toggle ? "#fff" : "#25273C";
    const inputField = toggle
      ? { backgroundColor: "#25273C" }
      : { backgroundColor: "white" };
  return (
    <MyContext.Provider value={{toggle,toggleBackgroundColor,backgroundImage,backgroundColor,textColor,inputField}}>
      <div>
        {children}
      </div>
    </MyContext.Provider>
  )
}

export default Context;