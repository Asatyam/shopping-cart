/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Home.module.css"
import Link from "next/link";
const Home = ()=>{

    return(
        <div className={style.home}>
            
            <div className={style['home-container']}>
                <img src="/about.jpg" alt="about-img"/>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br/> <br/>Quam ullam vitae sunt eaque voluptatibus accusantium rerum, pariatur modi. 
            </p>
            <button><Link href = '/components/Shop/Shop'>Shop Now</Link></button>
            </div>
            
        </div>
    )
}

export default Home;