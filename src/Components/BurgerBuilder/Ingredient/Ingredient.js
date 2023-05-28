import React from "react"; 
import './Ingredient.css'
import BreadTop from '../../../assets/Images/1-bread-top.jpg';
import Cheese from '../../../assets/Images/2-cheese.jpg';
import Meat from '../../../assets/Images/3-meat.jpg';
import Salad from '../../../assets/Images/4-salad.jpg';
import BreadBottom from '../../../assets/Images/5-bread-bottom.jpg';


const Ingredient = props => {
    let Ingredient = null;

    switch (props.type) {
        case 'bread-top':
            Ingredient = <div><img src={BreadTop} alt="Top Bread" /></div>;
            break;
        case 'bread-bottom':
            Ingredient = <div><img src={BreadBottom} alt="Bottom Bread" /></div>;
            break;

        case 'cheese':
            Ingredient = <div><img src={Cheese} alt="Cheese" /></div>;
            break;

        case 'meat':
            Ingredient = <div><img src={Meat} alt="Meat" /></div>;
            break;

        case 'salad':
            Ingredient = <div><img src={Salad} alt="Salad" /></div>;
            break;

        default:
            // break;
            Ingredient = null;
    }

    return (
        <div className="Ingredient">
           {Ingredient}
        </div>
    )
}

export default Ingredient