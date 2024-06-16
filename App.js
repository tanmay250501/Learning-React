

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

const ReactHeading = () => (
    <h1>Namste react heading from functional component 😍</h1>
)

// Component Composition => It is a proccess of combinning smaller , resuable compoents together to create a larger or more complex component
const Divisionheading = () => (
    <div className="heading">
        {1000 + 2000}
        <h1>Hi from Division Heading</h1>
        {ReactHeading()}
        <ReactHeading />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Divisionheading/>)