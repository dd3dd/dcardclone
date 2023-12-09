'use client';
import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
    const [isSideBar, setIsSideBar] = useState(false);
    const [postInfo, setPostInfo] = useState([])

    return (
        <Context.Provider value={{
            isSideBar, setIsSideBar, postInfo, setPostInfo,
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;