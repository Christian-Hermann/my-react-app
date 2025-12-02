import React, { useState } from "react";

function FoodOrderForm() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input id="name"></input>
      <label htmlFor="phone">Phone:</label>
      <input id="phone"></input>
      <label htmlFor="address">Address:</label>
      <input id="address"></input>
      <label htmlFor="order">Order:</label>
      <input id="order"></input>
    </form>
  );
}

export default FoodOrderForm;
