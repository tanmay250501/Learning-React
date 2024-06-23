import RestaurantCards from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState , useEffect} from "react";



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

    const [List , setList] = useState(resList)

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://mocki.io/v1/b45bd0c7-e4d5-4d04-9446-2a97bf205fd7");

        const json = await data.json()

        console.log(json);
        setList(json)

        console.log("useEffect is called Succesfully")
    };

    

    return (
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