import React from "react";
import airbnbimg from "../images/airbnbimg.jpg";


export default function Navbar() {
  return (
    <>
      <div>
        <img src={airbnbimg} alt="" width="100px" />
        <span>airbnb</span>
      </div>
    </>
  );
}
