import React from "react";
import "./divportfolio.css"


class DivPortfolio extends React.Component{
    constructor(props){
        super()
        }

    render(){
        return <>
        <div class="col-lg-4 col-md-6">
            <div class="p-3 border d-flex align-items-center  justify-content-center">
                <p class="text-light" id="para">{this.props.portvalue}</p>
            </div>
        </div>
        </>
    }
    }

export default DivPortfolio

