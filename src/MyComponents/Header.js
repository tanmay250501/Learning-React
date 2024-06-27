import { LOGO_URL } from "../utils/constants"
import { useState } from "react";

const Header = () => {
    const [btnName, setbtnNam] = useState("LogIn")


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