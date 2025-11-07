// Access a Component's props
import React from "react";

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{stringProps}</h2>
    </div>
  );
}

export default PropsDisplayer;

// Rendering Component's props

function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>
  );
}

function App() {
  return <Product name="Apple iWatch" price={500} rating="3.5/5.0" />;
}
