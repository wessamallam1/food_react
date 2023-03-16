import React, { useState } from "react";
import Data from "./data";
import styles from "./Menu.module.scss";
import Nav from "react-bootstrap/Nav";
import Burger from "../assets/hamburger.png";
import Pizza from "../assets/pizza.png";
import Bread from "../assets/bread.png";
function PillsExample() {
  const [items, setItems] = useState(Data);
  const filterItem = (categItem) => {
    const updateItems = Data.filter((curElem) => {
      return curElem.catogery == categItem;
    });
    setItems(updateItems);
  };
  return (
    <React.Fragment>
      <h1 className="mt-5 text-center main-heading ">Popular Foods</h1>
      <Nav  defaultActiveKey="/Menu" className={styles.menu}>
        <Nav.Item className={styles.Item1}>
          <Nav.Link eventKey="link-1" onClick={() => setItems(Data)}>
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.Item2}>
          <Nav.Link eventKey="link-2" onClick={() => filterItem("Burger")}>
            {" "}
            <img src={Burger} /> Burger
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.Item3}>
          <Nav.Link eventKey="link-3" onClick={() => filterItem("Pizza")}>
            <img src={Pizza} /> Pizza
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.Item4}>
          <Nav.Link eventKey="link-4" onClick={() => filterItem("Bread")}>
            <img src={Bread} /> Bread
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className={styles.menufood}>
        {items.map((e) => {
          const { id,image,price,name } = e;
          return (
            
              <div className={styles.card}  >
                <div className={styles.details}>
                  <img src={image}  />
                  <h4>{name}</h4>
                  <div>
                    <p>{price}</p>
                    <button>Add To Cart</button>
                  </div>
                </div>
              </div>
            
          );
        })}
      </div>

     
    </React.Fragment>
  );
}
export default PillsExample;
