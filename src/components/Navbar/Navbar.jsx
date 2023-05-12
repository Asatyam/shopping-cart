/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Navbar.module.css"
import Link from "next/link";

export default function Navbar(){

    return(
       <nav className={style['nav-bar']}>

            <h2> TopShop</h2>
            <ul className={style['nav-list']}>
                <li><Link href = "/">Home</Link></li>
                <li><Link href = "/shop">Shop</Link></li>
                <li>
                    <Link href="/cart">
                        <button className={style['cart-btn']}>
                        <img src="cart.png" alt="cart-icon"/>
                    </button>
                    </Link>
                </li>
            </ul>
       </nav>
    )
}