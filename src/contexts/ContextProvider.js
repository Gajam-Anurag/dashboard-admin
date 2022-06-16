import React, {useContext, createContext, useState} from 'react';

const StateContext = createContext()

const initialState = {
    chat : false,
    userProfile : false,
    Notification : false,
    cart : false
}


export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [ currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');

    const [themeSetting, setThemeSetting] = useState(false);


    const handleClick = (click) => {
        setIsClicked({ ...initialState, [click]:true});
    };

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value)
        setThemeSetting(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode',color)
        setThemeSetting(false);
    }
    


    return (
        <StateContext.Provider value = {{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode, setCurrentColor, setCurrentMode, themeSetting, setThemeSetting, setColor, setMode}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);