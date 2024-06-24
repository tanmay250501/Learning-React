import {LOGO_URL} from "../utils/constants"
import { useState } from "react";

const Header = () => {
    const [btnName , setbtnNam ] = useState("Login")

    let setLoginStatus = () => {

        if(btnName == "Login"){
            console.log("Logout");
            setbtnNam("Logout");
        }else{
            console.log("Login");
            setbtnNam("Login");
        }
    }

    
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
                    <button className="login" onClick={setLoginStatus}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header