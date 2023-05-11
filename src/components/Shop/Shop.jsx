import React  from "react";

import Items from "../Items/Items";
import style from "./Shop.module.css"

export default function Shop({setCart,products}){

    
    return(
        <div className={style.shop}>
            {products.map((product)=>{
               return  <Items products = {products} key = {product.id} id={product.id} name = {product.name} src = {product.src} price={product.price} setCart={setCart}/>
            })}
          
        </div>
    )
}