import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import style from "./App.module.css"

const App = ()=>{

    return(
        <div className={style.app}>
            <Navbar/>
            <Home/>
        </div>
    )
}

export default App;