import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummery extends Component {

    componentWillUpdate(){
        console.log("[OrderSummery ] componentWillUpdate() executed ...");
    }

    render() {
        const ingredientsSummery = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{this.props.ingredients[igKey]}</li>
            });
        return (

            <Aux>
                <p>Your Order</p>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientsSummery}
                </ul>
                <p><strong>Total Price:{this.props.totalPrice}</strong></p>
                <p>Continue to Check Out ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>

        );
    }



}

export default OrderSummery;