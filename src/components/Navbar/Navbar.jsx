/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Navbar.module.css"

export default function Navbar(){

    return(
       <nav className={style['nav-bar']}>

            <h2> TopShop</h2>
            <ul className={style['nav-list']}>
                <li>Home</li>
                <li>Shop</li>
                <li>
                    <button className={style['cart-btn']}>
                        <img src="cart.png" alt="cart-icon"/>
                    </button>
                </li>
            </ul>
       </nav>
    )
}