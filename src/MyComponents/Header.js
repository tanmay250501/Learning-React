import { LOGO_URL } from "../utils/constants"
import { useEffect, useState } from "react";

const Header = () => {
    const [btnName, setbtnNam] = useState("LogIn")
    console.log("Header is Rendered")
    // useEffect will be called eafter the component is rendered
    // if dependency array is emty [] => the useEffect will be called on inotial render only(just once)
    // if dependency array is [btnName] => useEffect will be called every time when btnName is updated.
    useEffect(()=> {
        console.log("UseEffect is called")
    },[btnName] )

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName == "LogIn" ?
                            setbtnNam("LogOut")
                            : setbtnNam("LogIn")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header