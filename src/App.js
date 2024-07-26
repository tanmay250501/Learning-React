

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./MyComponents/Header";
import Body from "./MyComponents/Body";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import AboutUs from "./MyComponents/AboutUS";
import ContactUs from "./MyComponents/ContactUs";
import Error from "./MyComponents/Error";
import RecepieMenu from "./MyComponents/RecepieMenu";





const AppLayout = () => (
    <div className="app">
        
        <Header />
        <Outlet />
    </div>

)

const appRouter = createBrowserRouter([
    {
        path : "/",
        element:<AppLayout/>,
        children:[
            {
                path : "/about",
                element:<AboutUs/>
            },
            {
                path : "/contact",
                element:<ContactUs/>
            },
            {
                path : "/",
                element:<Body/>
            },
            {
                path : "/menucard/:resId",
                element:<RecepieMenu/>
            },
        ],
        errorElement: <Error/>
    },
    

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)