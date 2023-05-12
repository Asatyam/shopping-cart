/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import style from "./Cart.module.css"
import { AppContext } from "../../context";
import { useContext } from "react";

function CartItem({item, handleDecrement,handleIncrement}){
    if(item.quantity>0)
    {
        return (  <div className={style['cart-item']}>
                    
                <img src = {item.src} alt = {item.name}/>
                <p> {item.name[0].toUpperCase()+item.name.slice(1)} Lorem ipsum dolor sit </p>
                <p> $ {item.price}</p>
                <button className={style.decrement} id = {item.id} onClick={handleDecrement}> - </button>
                <p>{item.quantity}</p>
                <button className={style.increment} id = {item.id} onClick = {handleIncrement}> + </button>
            </div> 
        )
    }
    return null;
}

export default function Cart(){

    const {cart,setCart} = useContext(AppContext);
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

    const calculateTotal = ()=>{
        return cart.reduce((total,item)=> total+(item.price*item.quantity),0)
    }
    return(
        <div className={style.cart}>
            <div className= {style["cart-items"]}>
                {cart.map(item=>(<CartItem key={item.id} item = {item} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>))}
            </div>

            <p>Total: $ {calculateTotal()}</p>
            <button className={style.checkout}>Checkout</button>
        </div>
    )
}