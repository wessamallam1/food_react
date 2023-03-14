import React from "react";
import styles from "../pizza/pizza.module.scss";
import imgPizza from '../assets/product_2.1.jpg';
import imgPizza2 from '../assets/product_3.1.jpg';
import imgPizza3 from '../assets/product_4.1.jpg';
import imgPizza4 from '../assets/product_2.2.jpg';
function Pizza(){
    return(
        <React.Fragment>
        <div className={styles.Pizza}>
            <h1>Hot Pizza</h1>
            <div className={styles.hotpizza}>
                <div className={styles.details}>
                    <img src={imgPizza}/>
                    <h4>Vegetrain Pizza</h4>
                    <div>
                        <p>$115</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
                <div className={styles.details}>
                    <img src={imgPizza2}/>
                    <h4>Double Cheese Margerita</h4>
                    <div>
                        <p>$110</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
                <div className={styles.details}>
                    <img src={imgPizza3}/>
                    <h4>Maxican Green Wave</h4>
                    <div>
                        <p>$110</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
                <div className={styles.details}>
                    <img src={imgPizza4}/>
                    <h4>Seafood Pizza</h4>
                    <div>
                        <p>115$</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
            
        </React.Fragment>
    )
}
export default Pizza;