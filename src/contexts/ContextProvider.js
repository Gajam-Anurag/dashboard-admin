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
    const handleClick = (click) => {
        setIsClicked({ ...initialState, [click]:true});
    };
    const [screenSize, setScreenSize] = useState(undefined);


    return (
        <StateContext.Provider value = {{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);