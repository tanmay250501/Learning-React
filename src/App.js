

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./MyComponents/Header";
import Body from "./MyComponents/Body";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import AboutUs from "./MyComponents/AboutUS";
import ContactUs from "./MyComponents/ContactUs";





const AppLayout = () => (
    <div className="app">
        
        <Header />
        <Body />
    </div>

)

const appRouter = createBrowserRouter([
    {
        path : "/",
        element:<AppLayout/>
    },
    {
        path : "/about",
        element:<AboutUs/>
    },
    {
        path : "/contact",
        element:<ContactUs/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)