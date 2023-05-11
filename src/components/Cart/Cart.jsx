/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { useState } from "react";
import Items from "../Items/Items";
import style from "./Cart.module.css"

export default function Cart({products, cart,setCart}){

    const handleIncrement = (e)=>{

        console.log(e.target.id);
        setCart(c=>{
            

            const idx  = c.findIndex((item)=>item.id == e.target.id );
            c[idx].quantity = c[idx].quantity + 1;
            console.log(c);
            return c;
        
        })
    }
    const handleDecrement = (e)=>{

        console.log(e.target.id);
        setCart(c=>{
            

            const idx  = c.findIndex((item)=>item.id == e.target.id );
            c[idx].quantity = c[idx].quantity - 1;
            console.log(c);
            return c;
        
        })
    }

    return(
        <div className={style.cart}>
            {cart.map(item=>{
                console.log("rerendered");
            return(
                
                
                <div key = {item.id} className={style['cart-item']}>
                    
                <img src = {item.src} alt = {item.name}/>
                <p> {item.name[0].toUpperCase()+item.name.slice(1)} Lorem ipsum dolor sit </p>
                <p> {item.price}</p>
                <button className={style.decrement} id = {item.id} onClick={handleDecrement}> - </button>
                <p>Quantity: {item.quantity}</p>
                <button className={style.increment} id = {item.id} onClick = {handleIncrement}> + </button>
                </div>
            ); 

            } )}
        </div>
    )
}