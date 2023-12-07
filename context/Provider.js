'use client';
import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
    const [isSideBar, setIsSideBar] = useState(false);


    return (
        <Context.Provider value={{
            isSideBar, setIsSideBar,
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;