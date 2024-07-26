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
    
    if (resMenu === null) return <Shimmer /> ;
    
    const {name , cuisines , costForTwoMessage , cloudinaryImageId} = resMenu?.cards?.[2]?.card?.card?.info;


    const {itemCards} = resMenu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    console.log(itemCards)

    return  (
        <div className="res-card">
            <img className="res-img" src={CDN_URL + cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <h1>Menu</h1>
            <ul>
            {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs:{item.card.info.price/100}</li>)}
            </ul>
            <h4 className="res-dis">{cuisines.join(", ")}</h4>

        </div>
    )
};

export default RecepieMenu;