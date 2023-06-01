import React from "react";
import Header from "../Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import { Route, Routes} from "react-router-dom";


const Main = props => {
    return (
        <div>
            <Header />
            <div className="container"> 
                <Routes>
                    <Route path="/orders" exact Component={Orders} />
                    <Route path="/checkout" exact Component={Checkout} />
                    <Route path="/" exact Component={BurgerBuilder} />
                </Routes>
            </div>


        </div>
    )
}

export default Main;