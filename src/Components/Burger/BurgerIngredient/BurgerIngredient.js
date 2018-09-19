import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropsTypes from 'prop-types';

class BurgerIngredient extends Component{

    render() {

        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.bacon}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }

}

BurgerIngredient.PropsTypes = {

    type: PropsTypes.string.isRequired 
};

export default BurgerIngredient;