import RestaurantCards from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState , useEffect} from "react";
import Shimmer from "./Shimmer";



// Normal JS Variable
// let ListJs = [
//     {
//         data: {
//             id: "1",
//             resName: "KFC",
//             cuisine: [
//                 "North Indian",
//                 "Barbecue",
//                 "Biryani",
//             ],
//             avgRating: "4.5",
//             cloudinaryImageId: "qchozfltdh9uf9a2hqjk"
//         }
//     },
//     {
//         data: {
//             id: "2",
//             resName: "Dominoz",
//             cuisine: [
//                 "North Indian",
//                 "Barbecue",
//                 "Biryani",
//             ],
//             avgRating: "3",
//             cloudinaryImageId: "qchozfltdh9uf9a2hqjk"
//         }
//     },
//     {
//         data: {
//             id: "3",
//             resName: "Beharouz",
//             cuisine: [
//                 "North Indian",
//                 "Barbecue",
//                 "Biryani",
//             ],
//             avgRating: "3",
//             cloudinaryImageId: "qchozfltdh9uf9a2hqjk"
//         }
//     },
// ]


const Body = () => {

    const [List , setList] = useState([])

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://mocki.io/v1/54a392d1-654f-4377-88e1-a2add321c8b8");
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json()

        console.log(json);
        // setList(json.data.cards[4].card.card)
        setList(json)

        console.log("useEffect is called Succesfully")
    };
    
    // This is conditional Rendering
    // if(List.length == 0){
    //     return <Shimmer/>
    // }


    return List.length == 0 ? (<Shimmer/>) 
    : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() =>{
                        filteredList = List.filter(
                            (rating) => rating.data.avgRating > 4);
                        setList(filteredList)
                }} >Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {List.map((restaurant) => <RestaurantCards key={restaurant.data.id} resData ={restaurant} /> )}

            </div>
        </div>
    )
};

export default Body;