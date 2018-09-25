import React from 'react';
import Aux from '../../../hoc/Aux';

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
            <p>Continue to Check Out ?</p>
        </Aux>
    );
}

export default orderSummery;