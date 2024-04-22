import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Shrek from "./Shrek";
import Shrek2 from "./Shrek2";
import Shrek3 from "./Shrek3";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div  className="MainContent">  
                    <h1>Favourite Movies</h1>
                    <ul className="header">
                        <li><NavLink to="/Shrek">Shrek</NavLink></li>
                        <li><NavLink to="/Shrek2">Shrek 2</NavLink></li>
                        <li><NavLink to="/Shrek3">Shrek 3</NavLink></li>
                    </ul>
                    <Routes className="content">
                        <Route></Route>
                        <Route exact path="/Shrek" element={<Shrek/>} />
                        <Route exact path="/Shrek2" element={<Shrek2/>} />
                        <Route exact path="/Shrek3" element={<Shrek3/>} />
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}
export default Main;