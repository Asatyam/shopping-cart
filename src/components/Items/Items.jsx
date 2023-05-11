/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";

import style from "./Items.module.css"

export default function Items({products, name, src, price,id,setCart}){

    const handleClick = (e)=>{
        const obj  = products.find((product)=>product.id === e.target.id);
       setCart(c=>[...c, obj]);
    }
   
    return (
        <div className={style.item}>
            <img src = {src} alt = {name}/>
            <p>{name[0].toUpperCase()+name.slice(1)} Lorem ipsum dolor sit </p>
            <p>{price}</p>
            <button id = {id} onClick={handleClick}>Add to Cart</button>
        </div>
    )

}