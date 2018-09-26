import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummery = (props)=>{

    const ingredientsSummery = Object.keys(props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
            });
    return (
        <Aux>
            <p>Your Order</p>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientsSummery}
            </ul>
            <p><strong>Total Price:{props.totalPrice}</strong></p>
            <p>Continue to Check Out ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummery;