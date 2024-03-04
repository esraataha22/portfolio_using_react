import React from "react";

class Button extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return (<>
                <button type="button">{this.props.btnvalue} </button>
    </>)
    }
}
export default Button