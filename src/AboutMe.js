import React from "react";
import "./aboutme.css"

class AboutMe extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<>
        <div class="row">
        <div class="col-3">
            <h1 id="about">About me</h1>
        </div>
        <div class="col-9">
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae labore quis molestias eaque debitis qui quibusdam minus voluptate.
             Incidunt nobis officiis ut?</p>

             <a href=""> <button type="button" class="btn  btn-dark" >Download Resume</button></a>
             
        </div>
    </div>
    </>)
    }
}
export default AboutMe;
