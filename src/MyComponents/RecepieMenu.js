import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RecepieMenu = () => {

    useEffect(() => {
        fetchMenu();
    }, [])
    
    const [resMenu , setResMenu] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch ("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.107662&lng=79.1369&restaurantId=327364&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json)
        setResMenu(json.data)
    };

    const restaurantInfo = resMenu?.cards?.[2]?.card?.card?.info;
    const name = restaurantInfo?.name;
    const cuisines = restaurantInfo?.cuisines;
    const costForTwoMessage = restaurantInfo?.costForTwoMessage;
    const cloudinaryImageId = restaurantInfo?.cloudinaryImageId;

    return (resMenu === null) ? <Shimmer /> : (
        <div className="res-card">
            <img className="res-img" src={CDN_URL + cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <h3>{costForTwoMessage}</h3>
            <h4 className="res-dis">{cuisines.join(", ")}</h4>
        </div>
        // <div className="menu">
        //     <h1>{name} </h1>
        //     <h3>{costForTwoMessage}</h3>
        //     <h3>Catergori</h3>
        //     <ul>
        //             <li>{cuisines.join(", ")}</li>
        //         </ul>

        // </div>
    )
};

export default RecepieMenu;