

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        [   React.createElement("h1", {}, "I am  Tanmay Sawwalakhe"), 
            React.createElement("h2", {}, "I am an h2 tag")
        ]
    )
)

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

const Header = ()=> {
    return (
        <div className="header">
        <div className="logo-container">
            <img className ="logo"src="https://graphicsprings.com/wp-content/uploads/2024/01/BzcypLORcYIUV9pkmO8Z7RVfm-MimyFXMaWCekSaWkaS4Vg50QOgEPTQ-qLxkj4nrhJRc_c0Ehpfq3HNeB_SEllP_HDI-PvO8iWRw4N9VuKM5LPyX2psooNA-37YM75kl8JRqENWEBrQdozcq1tV7V0.png?x93464"/>
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
    backgroundColor : "#f0f0f0"
}

const RestaurantCards = () => {
    return (
        <div className="res-card" style={StyleCard}>
            <img className="res-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAMLedZRk2kc2Gg7NC0jRaHIjxa1-vf-b_A&s"/>
            <h3>McDonalds</h3>
            <h3>Burger</h3>
            <h3>4.3</h3>

        </div>

    )
}

const Body = () => {
    return (
        <div className="body">
        <div className="search">Search</div>

        <div className="res-container">
            <RestaurantCards/>
            <RestaurantCards/>
            <RestaurantCards/>
            <RestaurantCards/>
            <RestaurantCards/>
            
            </div>
    </div>
    )
}

const AppLayout = () => (
    <div className="app">
        <Header/>
        <Body/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)