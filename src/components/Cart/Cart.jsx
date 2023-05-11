/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { useState } from "react";
import Items from "../Items/Items";
import style from "./Cart.module.css"


function CartItem({item, handleDecrement,handleIncrement}){
    if(item.quantity>0)
    {
        return (  <div className={style['cart-item']}>
                    
                <img src = {item.src} alt = {item.name}/>
                <p> {item.name[0].toUpperCase()+item.name.slice(1)} Lorem ipsum dolor sit </p>
                <p> {item.price}</p>
                <button className={style.decrement} id = {item.id} onClick={handleDecrement}> - </button>
                <p>{item.quantity}</p>
                <button className={style.increment} id = {item.id} onClick = {handleIncrement}> + </button>
            </div> 
        )
    }
    return null;
}

export default function Cart({cart,setCart}){

    const handleIncrement = (e)=>{


        let idx = cart.findIndex(x => x.id === e.target.id);
        let c = cart.slice();
        c[idx].quantity++;
        setCart(c);
    }
    const handleDecrement = (e)=>{

        let idx = cart.findIndex(x => x.id === e.target.id);
        let c = cart.slice();
        c[idx].quantity--;
        setCart(c);
    }

    return(
        <div className={style.cart}>
            {cart.map(item=>(<CartItem key={item.id} item = {item} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>))}
        </div>
    )
}