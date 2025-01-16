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
  

  return (
    <MyContext.Provider value={{toggle,toggleBackgroundColor,backgroundImage}}>
      <div>
        {children}
      </div>
    </MyContext.Provider>
  )
}

export default Context;