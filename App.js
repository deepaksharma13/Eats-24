import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// We can call Component inside a Component.
// Can call a react element inside a Component.
// can call a component inside a react element.
// can call element inside a element.

const Title = () => <h1>This is a Title</h1>;

const title = <h1>This is title element
    <Title />
</h1>


const HeadingJsx = () => {
 return <div>
    <Title />
    {title}
    <h1>This is a heading coming from JSX</h1>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingJsx />);
