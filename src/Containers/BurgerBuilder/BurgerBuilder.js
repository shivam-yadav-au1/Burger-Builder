import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad:0.5,
    bacon:0.6,
    cheese:0.9,
    meat:1.5
};
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4
    }

    addIngredientHandler = (type)=>{
       
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updateIngredients});

    }
    removeIngredientHandler = (type)=>{

    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientsAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;