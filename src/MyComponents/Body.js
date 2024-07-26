import RestaurantCards from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import NoResults from "./NoResults"; // Import the NoResults component

const Body = () => {
    // Local state variables - Super powerful variable
    const [originalList, setOriginalList] = useState([]); // To keep the original list
    const [List, setList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [noResults, setNoResults] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // State to manage loading state

    // Whenever state variable update, react triggers a reconciliation cycle (re-renders the component)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true); // Set loading to true before fetching data
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.107662&lng=79.1369&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)

        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setOriginalList(restaurants); // Save the original list
        setList(restaurants);
        setIsLoading(false); // Set loading to false after data is fetched

        console.log("useEffect is called successfully");
    };

    const handleSearch = () => {
        console.log(searchText);

        const filteredRestaurant = originalList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

        if (filteredRestaurant.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }

        setList(filteredRestaurant);
    };

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        setNoResults(false); // Reset noResults state when input changes
        if (e.target.value === '') {
            setList(originalList); // Reset list to original list if search text is cleared
        }
    };

    if (isLoading) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = originalList.filter(
                            (rating) => rating.info.avgRating > 4.3
                        );
                        setList(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            {noResults ? (
                <NoResults />
            ) : (
                <div className="res-container">
                    {List.map((restaurant) => (
                        <RestaurantCards key={restaurant.info.id} resData={restaurant} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;
