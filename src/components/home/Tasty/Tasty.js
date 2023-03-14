import React from 'react';
import styles from "../Tasty/Tasty.module.scss";
import tasty from "../assets/location.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
function Tasty(){
    return(
        <React.Fragment>
            <div className={styles.Tasty}>
                <div className={styles.img}>
                    <img src={tasty}/>
                </div>
                <div className={styles.treat}>
                    <h2>why <span>Tasty Treat</span></h2>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text 
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text 
                  or lipsum as or lipsum as it is sometimes known,
                  </p>
                  <div className={styles.tastyfood}>
                    <h4><AiOutlineCheckCircle className={styles.icon}/> Fresh and tasty food</h4>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy sometimes known, is dummy  </p>
                    <h4><AiOutlineCheckCircle className={styles.icon}/> Quality support</h4>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy sometimes known, is dummy  </p>
                    <h4><AiOutlineCheckCircle className={styles.icon}/> Order From any location</h4>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy sometimes known, is dummy  </p>
                 
                  </div>
                  
                  
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Tasty;