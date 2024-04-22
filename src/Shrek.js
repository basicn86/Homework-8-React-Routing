import React, { Component } from "react";
import ShrekJpg from "./Shrek.jpg";

class Shrek extends React.Component{
    render(){
        return(
            <div>
                <h2>Shrek</h2>
                <img src={ShrekJpg} height={250} title="Shrek The Movie" alt="Shrek The Movie"/>
                <p>Once upon a time, in a far away swamp, there lived an ogre named Shrek whose solitude is suddenly disturbed by an invasion of annoying fairy tale characters. They were all banished from their land by the evil Lord Farquaad. Determined to save his swamp, Shrek cuts a deal with Farquaad and sets out to rescue Princess Fiona to be Farquaad's bride.</p>
                <p>Image And Text Source: <a href="https://www.imdb.com/title/tt0126029/">Shrek (2001) - IMDb</a></p>
            </div>
        );
    }
}

export default Shrek;