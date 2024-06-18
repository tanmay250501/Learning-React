

import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "I am  Tanmay Sawwalakhe"),
//         React.createElement("h2", {}, "I am an h2 tag")
//         ]
//     )
// )

//JSX (transpiled before it6 reaches JS engine) - PARCEL - BABEL => its job is to convert JSX code to React Code

//JSX => React.createElement => ReactElement - JS object => HTMLElement(render)
const JsxHeading = (<h1>Heading from JSX</h1>)

// use thsi brackets () to specify that jsx is writen under this bracket

// const heading = React.createElement("h1", { id: "heading" }, "Hii from React");



// react Functional Component 
// React component => means a function which returns reactCode or some piece of jsx

// const ReactHeading = () => (
//     <h1>Namste react heading from functional component 😍</h1>
// )

// Component Composition => It is a proccess of combinning smaller , resuable compoents together to create a larger or more complex component
// const Divisionheading = () => (
//     <div className="heading">
//         {1000 + 2000}
//         <h1>Hi from Division Heading</h1>
//         {ReactHeading()}
//         <ReactHeading />
//     </div>
// )

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://graphicsprings.com/wp-content/uploads/2024/01/BzcypLORcYIUV9pkmO8Z7RVfm-MimyFXMaWCekSaWkaS4Vg50QOgEPTQ-qLxkj4nrhJRc_c0Ehpfq3HNeB_SEllP_HDI-PvO8iWRw4N9VuKM5LPyX2psooNA-37YM75kl8JRqENWEBrQdozcq1tV7V0.png?x93464" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const StyleCard = {
    backgroundColor: "#f0f0f0"
}

const resList = [
    {
        data: {
            id: "1",
            resName: "KFC",
            cuisine: [
                "North Indian",
                "Barbecue",
                "Biryani",
            ],
            avgRating: "4.5",
            cloudinaryImageId: "qchozfltdh9uf9a2hqjk"
        }
    },
    {
        data: {
            id: "2",
            resName: "Veg Daawat by Behrouz",
            cuisine: [
                "Biryani",
                "North Indian",
                "Kebabs",
            ],
            avgRating: "4.2",
            cloudinaryImageId: "2b579171cefc545ce6479e21c0016798"
        }
    },
    {
        data: {
            id: "3",
            resName: "Pizza Hut",
            cuisine: [
                "Italian",
                "Pizza",
                "Pasta",
            ],
            avgRating: "4.3",
            cloudinaryImageId: "qchozfltdh9uf9a2hqjk"
        }
    },
    {
        data: {

            id: "4",
            resName: "The Brooklyn Creamery - Healthy",
            cuisine: [
                "Desserts",
                "Ice Cream",
                "Healthy Food",
            ],
            avgRating: "4.1",
            cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa"
        }
    },
    {
        data: {
            id: "5",
            resName: "Makhani Darbar",
            cuisine: [
                "Biryani",
                "North Indian",
                "Kebabs",
            ],
            avgRating: "4.0",
            cloudinaryImageId: "c583da4b69d264ffe705e5918fad0e98"
        }
    },
    {
        data: {
            id: "6",
            resName: "Faasos' Signature Wraps & Rolls",
            cuisine: [
                "Fast Food",
                "Snacks",
                "North Indian"
            ],
            avgRating: "4.6",
            cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec"
        }
    },
    {
        data: {
            id: "7",
            resName: "Domino's Pizza",
            cuisine: [
                "Italian",
                "Pizza",
                "Fast Food",
                "Pastas"
            ],
            avgRating: "4.4",
            cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8"
        }
    },
    {
        data: {
            id: "8",
            resName: "Haldiram's Restaurant",
            cuisine: [
                "North Indian",
                "South Indian",
                "Biryani",
            ],
            avgRating: "4.3",
            cloudinaryImageId: "1abb89624b491497c8cff182d95ac457"
        }
    },
    {
        data: {
            id: "9",
            resName: "Theobroma",
            cuisine: [
                "Bakery",
                "Desserts",
            ],
            avgRating: "4.1",
            cloudinaryImageId: "63dd75492c47fcec191132b8eb299ea5"
        }
    },
    {
        data: {
            id: "10",
            resName: "The Belgian Waffle Co.",
            cuisine: [
                "Waffle",
                "Desserts",
                "Ice Cream"
            ],
            avgRating: "4.5",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/2113e3fa-c06f-4d4e-953b-4d7252a25d6f_259340.JPG"
        }
    }
];



const RestaurantCards = (props) => {
    const { resData } = props;

    const {cloudinaryImageId , resName , cuisine , avgRating} = resData?.data;
    return (
        <div className="res-card" >
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{resName}</h3>
            <h4 className="res-dis">{cuisine.join(" ,")}</h4>
            <h3>{avgRating}</h3>

        </div>

    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>

            <div className="res-container">
                {resList.map((restaurant) => <RestaurantCards key={restaurant.data.id} resData ={restaurant} /> )}

            </div>
        </div>
    )
}

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)