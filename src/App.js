

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./MyComponents/Header";
import Body from "./MyComponents/Body";





const AppLayout = () => (
    <div className="app">
        
        <Header />
        <Body />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)