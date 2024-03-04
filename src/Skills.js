import React from "react";
import "./skills.css"

class Skills extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (<>

<div class="row" id="row">
    <h1 id="ssk">Skills</h1>
    <label class="intro">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis facere odio aut in doloribus aliquam placeat. Sequi deleniti a vel.
         Necessitatibus in iure possimus accusantium temporibus? Deleniti ex dolorem maiores.</label>
    <div class="col-6" >
            <label id="focus">MY FOCUS </label> <br/> <br/> <br/>
            <label class="focus" >UI/UX Design </label> <br/> <br/>
            <label class="focus" >Responsive Design </label> <br/> <br/>
            <label class="focus" >Web Design </label> <br/> <br/>
            <label class="focus" >Mobile App Design </label> <br/> <br/>
    </div>
    <div class="col-6"> 
        <div id="sk_html">
            <div class="sk"><label class="courses">HTML</label></div>
        </div>
        <br/>
        <div id="sk_css">
            <div class="sk"><label class="courses">CSS</label></div>
        </div>
        <br/>
        <div id="sk_js">
            <div class="sk"><label class="courses">Javascript</label></div>
        </div>
        <br/>
        <div id="sk_react">
            <div class="sk"><label class="courses">React</label></div>
        </div>
        <br/>
        <div  id="sk_angular">
            <div class="sk"><label class="courses">Angular</label></div>
        </div>
        <br/>
    </div>
</div>
</> )
}
}
export default Skills