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
        const data = await fetch("https://mocki.io/v1/54a392d1-654f-4377-88e1-a2add321c8b8");
        const json = await data.json();

        console.log(json);
        setOriginalList(json); // Save the original list
        setList(json);
        setIsLoading(false); // Set loading to false after data is fetched

        console.log("useEffect is called successfully");
    };

    const handleSearch = () => {
        console.log(searchText);

        const filteredRestaurant = originalList.filter((res) =>
            res.data.name.toLowerCase().includes(searchText.toLowerCase())
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
                            (rating) => rating.data.avgRating > 4
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
                        <RestaurantCards key={restaurant.data.id} resData={restaurant} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;
