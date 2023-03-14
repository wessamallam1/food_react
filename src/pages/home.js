import React from "react";
import Hero from "../components/home/Hero/hero";
import Tfoods from "../components/home/typefoods/Tfoods";
import Delivers from "../components/home/detailsDelivers/delivers";
import Pizza from '../components/home/pizza/pizza'
import Menu from "../components/home/Menu/Menu";
import Tasty from "../components/home/Tasty/Tasty"
import Customer from "../components/home/customer/customer"
function Home(){
    return(
        <React.Fragment>
            <Hero/>
            <Tfoods/>
            <Delivers/>
            <Menu/>
            <Tasty/>
            <Pizza/>
            <Customer/>
        </React.Fragment>
    )
}
export default Home;