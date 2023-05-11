/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Items.module.css"

export default function Items({name, src, price,id}){

   
    return (
        <div className={style.item}>
            <img src = {src} alt = {name}/>
            <p>{name.toUpperCase()}</p>
            <p>{price}</p>
            <button id = {id}>Add to Cart</button>
        </div>
    )

}