"use client"
import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Cart from "../Cart/Cart";
import style from "./App.module.css"

const App = ()=>{

    const products = [{
        id:"1",
        name:"iphone",
        src:"/Items/iphone.png",
        price:1000.00,
    },
    {
        id:"2",
        name:"macbook",
        src:"/Items/macbook.jpeg",
        price:1600.00,
    },
    {
        id:"3",
        name:"airpods",
        src:"/Items/airpods.jpeg",
        price:300.00,
    },
    {
        id:"4",
        name:"dslr",
        src:"/Items/dslr.jpeg",
        price:700.00,
    },
    {
        id:"5",
        name:"keyboard",
        src:"/Items/keyboard.jpeg",
        price: 100.00,
    },
    {
        id:"6",
        name:"mouse",
        src:"/Items/mouse.jpeg",
        price:100.00,
    },{
        id:"7",
        name:"tv",
        src:"/Items/tv.jpeg",
        price:900.00,
    },{
        id:"8",
        name:"monitor",
        src:"/Items/monitor.png",
        price:600.00,
    },{
        id:"9",
        name:"ps5",
        src:"/Items/ps5.jpeg",
        price:500.00,
    },{
        id:"10",
        name:"xbox",
        src:"/Items/xbox.jpeg",
        price:450.00,
    },{
        id:"11",
        name:"homepod",
        src:"/Items/homepod.jpeg",
        price:200.00,
    },
    {
        id:"12",
        name:"echo",
        src:"/Items/echo.jpeg",
        price:80.00,
    },
    ]

    const [cart,setCart] = useState([{
        id:"1",
        name:"iphone",
        src:"/Items/iphone.png",
        price:1000.00,
        quantity:1,
    }]);
    
    const totalItems = cart.reduce((total,x)=>total+x.quantity,0);
    return(
        <div className={style.app}>
            
            <Home/>
             {/* <Cart cart = {cart} setCart = {setCart} products = {products}/> */}
            
        </div>
    )
}

export default App;