import React from "react";
import styles from "../customer/customer.module.scss";
import Imgname from "../assets/ava-1.jpg";
import Network from "../assets/network.png";

function Customer() {
  return (
    <React.Fragment>
      <div className={styles.customer}>
        <div className={styles.definnes}>
          <h5>Testimonails</h5>
          <h2>What our <span>customer</span> are saying</h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text Lorem
            ipsum, or lipsum as it is sometimes known, is dummy text or lipsum
            as or lipsum as{" "}
          </p>
          <h6>
            {" "}
            <img src={Imgname} /> Ahmed Belal
          </h6>
        </div>
        <div className={styles.img}>
          <img src={Network} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Customer;
