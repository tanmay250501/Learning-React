import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-img" src={CDN_URL + cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <h4 className="res-dis">{cuisines.join(", ")}</h4>
            <h3>{avgRating}</h3>
        </div>
    );
};


export default RestaurantCards;
