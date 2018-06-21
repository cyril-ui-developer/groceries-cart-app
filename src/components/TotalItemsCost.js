import React from 'react';

const TotalItemsCost =(props)=> {

    const reducer = (accumulator, currentValue) => accumulator + (currentValue['value'] * currentValue['price']);
    const totalCostItems = props.fruits.reduce(reducer,0)

    return(
        <span>${totalCostItems.toFixed(2)}</span>
    )
}

export default TotalItemsCost;