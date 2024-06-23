import {CDN_URL} from "../utils/constants"

const RestaurantCards = (props) => {
    const { resData } = props;

    const {cloudinaryImageId , name , cuisines , avgRating} = resData?.data;
    return (
        <div className="res-card" >
            <img className="res-img" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4 className="res-dis">{cuisines.join(" ,")}</h4>
            <h3>{avgRating}</h3>

        </div>

    )
};

export default RestaurantCards;