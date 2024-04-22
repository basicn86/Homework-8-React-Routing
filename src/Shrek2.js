import React, { Component } from "react";
import Shrek2Jpg from "./Shrek2.jpg";

class Shrek2 extends React.Component{
    render(){
        return(
            <div>
                <h2>Shrek 2</h2>
                <img src={Shrek2Jpg} height={250} title="Shrek 2 The Movie" alt="Shrek 2 The Movie"/>
                <p>Shrek has rescued Princess Fiona, got married, and now is time to meet the parents. Shrek, Fiona, and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.</p>
                <p>Image And Text Source: <a href="https://www.imdb.com/title/tt0298148/">Shrek 2 (2004) - IMDb</a></p>
            </div>
        );
    }
}

export default Shrek2;