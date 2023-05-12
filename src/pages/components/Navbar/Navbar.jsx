/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Navbar.module.css"
import Link from "next/link";
import { AppContext } from "../../context";
import { useContext } from "react";

export default function Navbar(){

    const {cart,setCart} = useContext(AppContext);
     const totalItems = cart.reduce((total,x)=>total+x.quantity,0);
    return(
       <nav className={style['nav-bar']}>

            <h2> TopShop</h2>
            <ul className={style['nav-list']}>
                <li><Link href = "/">Home</Link></li>
                <li><Link href = "/components/Shop/Shop">Shop</Link></li>
                <li>
                    <Link href="/components/Cart/Cart">
                        <button className={style['cart-btn']}>
                        <img src="cart.png" alt="cart-icon"/>
                    </button>
                    </Link>
                </li>
                <p className={style.totalItems}>{totalItems}</p>
            </ul>
       </nav>
    )
}