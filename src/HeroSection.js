import React from "react";
import Button from "./Button";
import "./herosection.css"

class HeroSection extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<>
        <div id="header" class="row">
            <div class="col-6 mt-1">
                <div id ="info">
                    <h1 class="name">Esraa Taha</h1>
                    <h3 class="track">Web Developer & Designer</h3>
                    <br/>
                    <button btncolor="#0000" btnvalue="Contact me" className="btn btn-light">Contact me</button>
                </div>
            </div>
        </div>
    </>)
    }
}
export default HeroSection