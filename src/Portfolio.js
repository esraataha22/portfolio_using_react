import React from "react";
import "./portfolio.css"
import DivPortfolio from "./DivPortfolio"

class Portfolio extends React.Component{
    constructor(){
        console.log("CONSTRUCTOR")
        super()
        this.state = {
            name: ''
        }
    }

    componentDidMount(){
        console.log("Component Did Mount")
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
    }

    render(){
        return(
            <> 
            <h1 id="portfo">Portfolio</h1>
            <br/>

                {/* <UserData  data={this.state}/>             */}
                <div class="row" div="cont">
                        <DivPortfolio portvalue="WEB DESIGN" />
                        <DivPortfolio portvalue="MOBILE DESIGN"/>
                        <DivPortfolio portvalue="lOGO DESIGN" />
                </div>
                <br/>
                <div class="row" div="cont">
                        <DivPortfolio portvalue="WEB APPLICATION DEVELOPMENT" />
                        <DivPortfolio portvalue="MOBILE APPLICATION DEVELOPMENT" />
                        <DivPortfolio portvalue="PWA DEVELOPMENT" />
                </div>
            </>
        )
    }
}
export default Portfolio;