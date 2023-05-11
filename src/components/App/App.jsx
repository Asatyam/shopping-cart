import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./App.module.css"

const App = ()=>{

    return(
        <div className={style.app}>
            <Navbar/>
        </div>
    )
}

export default App;