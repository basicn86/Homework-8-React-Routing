import React, { Component } from "react";
import Shrek3Jpg from "./Shrek3.jpeg";

class Shrek3 extends React.Component{
    render(){
        return(
            <div>
                <h2>Shrek 3</h2>
                <img src={Shrek3Jpg} height={250} title="Shrek 3 The Movie" alt="Shrek 3 The Movie"/>
                <p>When Fiona's father and King of Far Far Away passes away, Shrek becomes the immediate successor of the throne. However, Shrek decides to find the legitimate heir Artie in a distant kingdom with his friends Donkey and Puss in Boots to be able return to his house in the swamp with the pregnant Fiona. Meanwhile, the envious Prince Charming is plotting a coup to become the new king.</p>
                <p>Image And Text Source: <a href="https://www.imdb.com/title/tt0413267/">Shrek The Third (2007) - IMDb</a></p>
            </div>
        );
    }
}

export default Shrek3;