import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RecepieMenu = () => {
    // useEffect to fetch menu data when the component mounts
    useEffect(() => {
        fetchMenu();
    }, []);

    // Get the restaurant ID from the URL parameters
    const { resId } = useParams();
    console.log(resId);

    // State to hold the restaurant menu data
    const [resMenu, setResMenu] = useState(null);

    // Function to fetch the menu data from the API
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setResMenu(json.data);
    };

    // Show a shimmer loading component while the menu data is being fetched
    if (resMenu === null) return <Shimmer />;

    // Destructure necessary details from the menu data
    const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
        resMenu?.cards?.[2]?.card?.card?.info || {};

    // Extract the item cards from the menu data
    const itemCards =
        resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
            ?.card?.itemCards || [];

    // Extract the categories from the menu data
    const categories =
        resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
            ?.card?.categories || [];

    // Check if there are any categories in the menu
    const hasCategories = categories.length > 0;

    // Function to render individual items
    const renderItems = (items) => {
        return items.map((item) => (
            <li key={item.card.info.id}>
                {item.card.info.name} - Rs:{item.card.info.price / 100}
            </li>
        ));
    };

    // Function to render categories and their items
    const renderCategories = (categories) => {
        return categories.map((category) => (
            <div key={category.categoryId}>
                <h4>{category.title}</h4>
                <ul>
                    {renderItems(category.itemCards)}
                </ul>
            </div>
        ));
    };

    // Render the component
    return (
        <div className="res-card1">
    {/* Restaurant image */}
    <img className="res-img1" src={CDN_URL + cloudinaryImageId} alt={name} />
    <div>
        {/* Restaurant name */}
        <h3>{name}</h3>
        {/* Menu title */}
        <h1>Menu</h1>
        {/* Cost for two */}
        <h5>{costForTwoMessage}</h5>
        {/* Conditionally render categories if they exist, otherwise render items directly */}
        {hasCategories ? (
            <div>
                {renderCategories(categories)}
            </div>
        ) : (
            <ul>
                {renderItems(itemCards)}
            </ul>
        )}
        {/* Cuisines */}
        <h4 className="res-dis1">{cuisines?.join(", ")}</h4>
    </div>
</div>

    );
};

export default RecepieMenu;
