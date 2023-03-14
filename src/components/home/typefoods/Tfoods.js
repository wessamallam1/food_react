import React from "react";
import styles from './Tfoods.module.scss';
import FastFood from "../assets/category-01.png";
import Pizza from "../assets/category-02.png";
import Asian from "../assets/category-03.png";
import Meat from "../assets/category-04.png";

function Tfoods(){
    return(
        <React.Fragment>
            <section className={styles.Tfoods}>
                <div>
                    <img src={FastFood} />
                    <h5>Fast Food</h5>
                </div>
                <div>
                    <img src={Pizza} />
                    <h5>Pizza</h5>
                </div>
                <div>
                    <img src={Asian} />
                    <h5>Asian Food</h5>
                </div>
                <div>
                    <img src={Meat} />
                    <h5>Row Meat</h5>
                </div>

            </section>
            <div className={styles.tackcare}>
                <h4>What we Serve</h4>
                <h2>just set back at home <br/>we will <span>tack care</span></h2>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text <br/>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text 
                  </p>
            </div>
        </React.Fragment>
    )
}
export default Tfoods;