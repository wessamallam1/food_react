import React from "react";
import styles from "../detailsDelivers/delivers.module.scss";
import imgdelivers from '../assets/service-01.png'
import imgsuper from '../assets/service-02.png'
import imgdine from '../assets/service-03.png'
function Delivers() {
  return (
    <React.Fragment>
      <section className={styles.Delivers}>
        <div>
          <img src={imgdelivers} />
          <h2>Quick delivery</h2>
          <p>Lorem ipsum, or lipsum as it is is dummy  used in laying out
                  Lorem ipsum,</p>
        </div>
        <div>
          <img src={imgsuper} />
          <h2>Quick delivery</h2>
          <p>Lorem ipsum, or lipsum as it is is dummy  used in laying out
                  Lorem ipsum,</p>
        </div>
        <div>
          <img src={imgdine} />
          <h2>Quick delivery</h2>
          <p>Lorem ipsum, or lipsum as it is is dummy  used in laying out
                  Lorem ipsum,</p>
        </div>
      </section>
    
    </React.Fragment>
  );
}
export default Delivers;
