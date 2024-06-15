

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
const JsxHeading = <h1>Heading from JSX</h1>

// const heading = React.createElement("h1", { id: "heading" }, "Hii from React");

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(JsxHeading)