import { CDN_URL } from "../utils/constants"; // Import the CDN URL for images from a constants file

// RestaurantCards component receives props which contains the restaurant data
const RestaurantCards = (props) => {
    const { resData } = props; // Destructure the resData from props

    // Destructure necessary fields from resData
    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

    return (
        <div className="res-card">
            {/* Display the restaurant image using the cloudinaryImageId */}
            <img className="res-img" src={CDN_URL + cloudinaryImageId} alt={name} />
            {/* Display the restaurant name */}
            <h3>{name}</h3>
            {/* Display the restaurant cuisines as a comma-separated string */}
            <h4 className="res-dis">{cuisines.join(", ")}</h4>
            {/* Display the average rating of the restaurant */}
            <h3>{avgRating}</h3>
        </div>
    );
};

export default RestaurantCards; // Export the component to be used in other parts of the application
