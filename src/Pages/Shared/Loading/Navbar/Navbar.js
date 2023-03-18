import React from 'react';

const Navbar = () => {

  // Get the stringified data from local storage
const dataString = localStorage.getItem("myData");

// Parse the stringified data back to an array of objects
const data = JSON.parse(dataString);
const filteredData = data.filter((_, index) => index < 10);
// Use the retrieved data as needed
console.log(filteredData);


    return (
        <div>
        <div class="navbar bg-black">
        <ul class="menu menu-horizontal px-1 flex-1 justify-center">
          <li tabindex="0">
            <a class="text-white">Figma</a>
            <ul class="p-2 bg-black">
              <li><a class="text-white">Framer</a></li>
              <li><a class="text-white">Sketch</a></li>
              <li><a class="text-white">Invision Studio</a></li>
              <li><a class="text-white">Figma</a></li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="text-white">Menu B</a>
            <ul class="p-2 bg-black">
              <li tabindex="0">
                <a class="text-white">Submenu 2.1</a>
                <ul class="p-2 bg-black">
                  <li><a class="text-white">Submenu 2.1.1</a></li>
                  <li><a class="text-white">Submenu 2.1.2</a></li>
                </ul>
              </li>
              <li tabindex="0">
                <a class="text-white">Submenu 2.1</a>
                <ul class="p-2 bg-black">
                  <li><a class="text-white">Submenu 2.1.1</a></li>
                  <li><a class="text-white">Submenu 2.1.2</a></li>
                </ul>
              </li>
              <li><a class="text-white">Submenu 2.2</a></li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="text-white">Dropdown menu C</a>
            <ul class="p-2 bg-black">

            {
              filteredData.map((data, index) => (
                <li key={index}>
                  <a className="text-white" contentEditable>{data.name}</a>
                  <button className="btn btn-accent mx-2">Del</button>
                  <br />
                  <button className="btn btn-accent mx-2">{data.name}</button>
                </li>
              ))
              
            }
              
            </ul>
          </li>
        </ul>
      </div>
      
        </div>
    );
};

export default Navbar;