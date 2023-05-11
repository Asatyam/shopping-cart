import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Shop from "../Shop/Shop"
import style from "./App.module.css"

const App = ()=>{

    return(
        <div className={style.app}>
            <Navbar/>
            <Shop/>
        </div>
    )
}

export default App;