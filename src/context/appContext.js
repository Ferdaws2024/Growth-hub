import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [type, settype] = useState(null)
    const [user, setuser] = useState(null)


    return (
        <AppContext.Provider
            value={{
                type,
                settype,
                user,
                setuser
            }}>
            {children}
        </AppContext.Provider>
    );
};
