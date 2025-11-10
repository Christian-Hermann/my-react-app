import React from "react";

function GroceryItem(props) {
  function handleClick() {
    alert(props.name + " added to cart!");
  }

  return <button onClick={handleClick}>{props.name}</button>;
}

export default GroceryItem;
