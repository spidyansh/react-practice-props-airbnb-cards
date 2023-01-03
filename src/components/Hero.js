import React from 'react'
import photogrid from "../images/photogrid.png";

export default function Hero() {
  return (
    <div>
        <div>
          <img src={photogrid} alt="" width="100%" />
        </div>
        <div>
            <h2>Online Experience</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur amet, quibusdam, blanditiis nostrum ea, deserunt vero aperiam alias temporibus veniam dignissimos sit sunt reprehenderit iure.</p>
        </div>
    </div>
  )
}
