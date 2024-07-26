import RestaurantCards from "./RestaurantCard"; // Import the RestaurantCards component
import { useState, useEffect } from "react"; // Import hooks from React
import Shimmer from "./Shimmer"; // Import the Shimmer component for loading state
import NoResults from "./NoResults"; // Import the NoResults component for no search results

const Body = () => {
    // Local state variables - Super powerful variable
    const [originalList, setOriginalList] = useState([]); // State to store the original list of restaurants
    const [List, setList] = useState([]); // State to store the current list of restaurants to be displayed
    const [searchText, setSearchText] = useState(''); // State to store the search text input by the user
    const [noResults, setNoResults] = useState(false); // State to manage no results found message
    const [isLoading, setIsLoading] = useState(true); // State to manage loading state

    // Whenever state variable update, react triggers a reconciliation cycle (re-renders the component)

    useEffect(() => {
        fetchData(); // Fetch data when the component mounts
    }, []); // Empty dependency array means this runs only once when the component mounts

    const fetchData = async () => {
        setIsLoading(true); // Set loading to true before fetching data
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.107662&lng=79.1369&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); // Parse the response as JSON
        console.log(json); // Log the entire response
    
        // Extract the restaurant data from the API response
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
        console.log("Fetched restaurants:", restaurants.length); // Log the number of restaurants fetched
    
        setOriginalList(restaurants); // Save the original list
        setList(restaurants); // Set the list to be displayed to the fetched restaurants
        setIsLoading(false); // Set loading to false after data is fetched
    
        console.log("useEffect is called successfully");
    };

    const handleSearch = () => {
        console.log(searchText);

        // Filter the original list based on the search text
        const filteredRestaurant = originalList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

        if (filteredRestaurant.length === 0) {
            setNoResults(true); // Set noResults to true if no matches found
        } else {
            setNoResults(false); // Set noResults to false if matches are found
        }

        setList(filteredRestaurant); // Update the list to be displayed with the filtered results
    };

    const handleInputChange = (e) => {
        setSearchText(e.target.value); // Update the search text state
        setNoResults(false); // Reset noResults state when input changes
        if (e.target.value === '') {
            setList(originalList); // Reset list to original list if search text is cleared
        }
    };

    if (isLoading) {
        return <Shimmer />; // Render the Shimmer component while loading
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={handleInputChange} // Handle input change
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        // Filter the original list for top-rated restaurants
                        const filteredList = originalList.filter(
                            (rating) => rating.info.avgRating > 4.3
                        );
                        setList(filteredList); // Update the list to be displayed
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            {noResults ? (
                <NoResults /> // Render the NoResults component if no results found
            ) : (
                <div className="res-container">
                    {List.map((restaurant) => (
                        <RestaurantCards key={restaurant.info.id} resData={restaurant} /> // Render each restaurant card
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;
