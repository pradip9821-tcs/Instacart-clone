import React, { createContext, useState } from "react";

export const HiddenContext = createContext({
    lochidden: true,
    logInHidden: false,
    toggleLogInHidden: () => { },
    togglelocHidden: () => { }
    
});

const HiddenProvider = ({ children }) => {
    const [logInHidden, setLogInHidden] = useState(true);
    const [lochidden, setlocHidden] = useState(true);
   

    const togglelocHidden = () => { setlocHidden(!lochidden); };

    const toggleLogInHidden = () => { setLogInHidden(!logInHidden); };

    return (
        <HiddenContext.Provider
            value={{
                togglelocHidden,
                lochidden,
                toggleLogInHidden,
                logInHidden
            }}>
            {children}
        </HiddenContext.Provider>
    )
};

export default HiddenProvider;
