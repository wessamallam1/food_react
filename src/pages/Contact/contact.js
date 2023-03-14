import React from "react";
import styles from "../Contact/contact.module.scss";
import logo from "../../components/home/assets/res-logo.png"
import { FiSend } from "react-icons/fi";
function Contact(){
    return(
        <React.Fragment>
            <div className={styles.Contact}>
                <div>
                    <img src={logo}/>
                    <h3>Tasty Treat</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text 
                  Lorem ipsum, or
                  </p>
                </div>
                <div>
                    <h4>Delivery Time</h4>
                    <h6>sunday thurday</h6>
                    <h6>10:00 Pm - 11:00Pm</h6>
                    <h6 className={styles.friday}>friday saturday</h6>
                    <h6>off Day</h6>
                </div>
                <div>
                    <h4>Contact</h4>
                    <h6>Location:Egypt-Mansoura</h6>
                    <h6>Phone:01102050619</h6>
                    <h6>Email:ahamd@gmail.com</h6>
                </div>
                <div>
                    <h4>Newsleter</h4>
                    <p>subscribe our newsleter</p>
                    <input placeholder="enter email"/>
                    <button><FiSend/></button>
                        
                    
                </div>
            </div>
        </React.Fragment>
    )
}
export default Contact;