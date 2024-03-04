import React from "react";
import "./footer.css"
import facebook from './assests/facebook.webp'
import google from './assests/google.png'
import linkedin from './assests/linkedin.png'


class Footer extends React.Component {
    constructor() {
        console.log("CONSTRUCTOR")
        super()
    }
    render() {
        return (
            <>

                <div class="row" id="footer" >
                    <div class="col-lg-4" if="footer1">
                        <h5 id="get">GET IN TOUCH</h5>
                        <ul id="information">
                            <li>esraataha@gmail.com</li>
                            <li>777-125-3384</li>
                        </ul>
                    </div>
                    <div class="col-lg-4" id= "footer2">
                        <button type="button" class="btn btn-outline-light">Contact me</button>
                    </div>
                    <div class="col-lg-4" id="footer3">
                        <a href="https://www.facebook.com/" class="links"><img src={facebook} width="30px" height="30px" /></a>
                        <a href="https://www.google.com/" class="links"><img src={google} width="30px" height="30px" /></a>
                        <a href="https://www.linked.com/" class="links"><img src={linkedin} width="30px" height="30px" /></a>
                        <p id="copywrite">copywrite © 2019KR</p>
                    </div>
                </div>

            </>
        )
    }
}
export default Footer;