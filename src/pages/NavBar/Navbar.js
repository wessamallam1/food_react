import React from "react";
import styles from "./Navbar.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiUser } from "react-icons/bi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { HiEye } from "react-icons/hi";
import imglogo from "../../components/home/assets/res-logo.png";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className={styles.Navbar}
    >
      <Container>
        <div>
          <img src={imglogo} className={styles.Logo} /> <br />
          <Navbar.Brand href="#home">Tasty Treat</Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.home}>
              Home
            </Nav.Link>
            <Nav.Link href="#foods" className={styles.about}>
              Foods
            </Nav.Link>
            <Nav.Link href="#cart" className={styles.about}>
              Cart
            </Nav.Link>
            <Nav.Link href="#contact" className={styles.about}>
              Contact
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">
              {" "}
              <RiShoppingBasketLine />
              <HiEye className={styles.eye} />
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              <BiUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
