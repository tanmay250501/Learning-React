

# Learning React Documentation

This repository contains a simple setup to demonstrate a basic usage of React in a web application.

## Contents

1. [Overview](#overview)
2. [Setup](#setup)
3. [Step 1: Include CDN Links in HTML Body](#step-1-include-cdn-links-in-html-body)
4. [Step 2: Create Root Element in HTML](#step-2-create-root-element-in-html)
5. [Step 3: Write JavaScript Code to Render React Element](#step-3-write-javascript-code-to-render-react-element)
6. [Running the Application](#running-the-application)
7. [Conclusion](#conclusion)

## Overview

This project aims to showcase the integration of React into a web application. It consists of an HTML file (`index.html`) and a JavaScript file (`App.js`). The HTML file serves as the entry point for the application, while the JavaScript file contains the React code to render a simple heading.

## Setup

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.

## Step 1: Include CDN Links in HTML Body

In this step, we'll add the CDN links for React and ReactDOM to the body of the HTML file.

```html
<body>

    <div id="root"></div>
    
    <!-- Step 1: Add CDN links for React and ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

    <script src="./App.js"></script>
</body>
```

## Step 2: Create Root Element in HTML

In this step, we'll create a root element in the HTML file where our React application will be mounted.

```html
<div id="root"></div>
```

## Step 3: Write JavaScript Code to Render React Element

In this step, we'll write the JavaScript code in the `App.js` file to create and render a React element.

```javascript
const heading = React.createElement("h1", { id: "heading" }, "Hi from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

## Running the Application

To run the application:
1. Open the `index.html` file in a web browser.
2. You should see the heading "Hi from React" displayed on the webpage.

# Package.json
It is configuration of npm & It keeps track of what exact version of that package is installed

# Package-lock.json
It keeps track of exact version of the dependencies

## Notes :

```jsx
const parent = React.createElement(
  "div", 
  { id: "parent" },
  React.createElement(
    "div", 
    { id: "child" },
    [
      React.createElement("h1", {}, "I am Tanmay Sawwalakhe"),
      React.createElement("h2", {}, "I am an h2 tag")
    ]
  )
);

use thsi brackets () to specify that jsx is writen under this bracket

const heading = React.createElement("h1", { id: "heading" }, "Hii from React");



react Functional Component 
React component => means a function which returns reactCode or some piece of jsx

const ReactHeading = () => (
    <h1>Namste react heading from functional component 😍</h1>
)

Component Composition => It is a proccess of combinning smaller , resuable compoents together to create a larger or more complex component

const Divisionheading = () => (
    <div className="heading">
        {1000 + 2000}
        <h1>Hi from Division Heading</h1>
        {ReactHeading()}
        <ReactHeading />
    </div>
)
```

JSX (transpiled before it6 reaches JS engine) - PARCEL - BABEL => its job is to convert JSX code to React Code

JSX => React.createElement => ReactElement - JS object => HTMLElement(render)

## Types of Expots

# 1. Named Export
```js

export const example ="demo";
```

# 2. Default Export

```jsx
const example = "demo";

export default example;
```

## React Hooks 
# (Hooks are Normal JS Utility function) => given by React 
- useState() - SuperPowerfull React Variable
- useEffect()


