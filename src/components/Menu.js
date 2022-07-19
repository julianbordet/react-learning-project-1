import React from "react";
import MenuItem from "./MenuItem";
import './Menu.css'

const Menu = () =>{

    const DUMMY_ITEMS = [
        {
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99
        },
        {
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.50
        },
        {
            name: 'Barbacue Burger',
            description: 'American, raw, meaty',
            price: 12.99
        },
        {
            name: 'Green Bowl',
            description: 'Healthy... and green...',
            price: 18.99
        }
    ];

    return(
        <div className='menu-container'>
        {DUMMY_ITEMS.map((item) => (
                <MenuItem name={item.name} description={item.description} price={item.price} ></MenuItem>
            ))} 
        
        </div>
    )

}

export default Menu;