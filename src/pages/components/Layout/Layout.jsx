/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../Navbar/Navbar";
import style from  "./Layout.module.css"
export default function Layout({children}){

    return(
       <div className={style.layout}>
       <Navbar/>
       {children}
       
       </div>
    )
}