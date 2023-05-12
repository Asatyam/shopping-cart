/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";

import style from "./Items.module.css"

export default function Items({products, name, src, price,id,setCart}){

    console.log(name,products[0]);

    const handleClick = (e)=>{
        const obj  = products.find((product)=>product.id === e.target.id);
         const item = {
            ...obj,
            quantity:1,
        }
       setCart(c=>{
        const id = item.id;
        const idx = c.findIndex(x=>x.id === id);
        if(idx === -1)
        {
            return [...c, item];
        }
        else{
            let temp = c.slice();
             temp[idx].quantity++;
             return temp;
        }
        
       });
    }
   
    return (
        
        <div className={style.item}>
            {console.log(name)}
            <img src = {src} alt = {name}/>
            <p>{name[0].toUpperCase()+name.slice(1)} Lorem ipsum dolor sit </p>
            <p>$ {price}</p>
            <button id = {id} onClick={handleClick}>Add to Cart</button>
          
        </div>
    )

}