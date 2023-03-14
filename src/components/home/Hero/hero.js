import React from "react";
import styles from "../Hero/hero.module.scss";
// import imghero from './src/pages/assets/hero.png'
import {RiCarLine} from "react-icons/ri";
import {BiCheckShield} from "react-icons/bi";
import Imghero from '../assets/hero.png'
function Hero(){
    return(
        <React.Fragment>
            <section className={styles.hero}>
                <div className={styles.texthero}>
                  <h5>Easy Way to make an order</h5>
                  <h1>HUNGRY? <span>just wait <br/>food at </span> your door </h1>
                  <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  Lorem ipsum, <br/>or lipsum as it is sometimes known, is dummy text used in laying out
                  </p>
                  <div className={styles.btns}>
                    <button className={styles.orderNow}>Order Now</button>
                    <button className={styles.allfood}>see all foods</button>
                  </div>
                  <div className={styles.icons}>
                    <h6> <RiCarLine className={styles.car}/> No Shopping Fees</h6>
                    <h6> <BiCheckShield className={styles.check} /> 100% secure checkout</h6>

                  </div>
                  
                </div>
                <div>
                    <img src={Imghero}/>
                </div>
                
            </section>
        </React.Fragment>
    )
}
export default Hero;