import React, { Component } from 'react';
import serialForm from 'form-serialize';

import Aux from '../components/Aux';
import ListFruits from '../components/ListFruits';
//import Model from '../components/models/Model';
import AddItem from '../components/AddItem';


class ListItems extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        fruits: [
            { label: "Apple", quantity: 2, price: "0.95" },
            { label: "Orange", quantity: 1, price: "0.75" },
            { label: "Banana", quantity: 4, price: "1.50" },
            { label: "Tangerine", quantity: 0, price: "2.45" }
        ]
    }

    addRemoveEventHandler = (obj, index, sign) => {
        let updatedConut = 0;
        if (sign === '+') {
            updatedConut = Number(obj.quantity) + 1;
        } else if (sign === '-' && obj.quantity > 0) {
            updatedConut = Number(obj.quantity) - 1;
        } else {
            alert("You have no fruit to remove")
            return updatedConut;
        }

        updatedConut = { label: obj.label, quantity: updatedConut, price: obj.price }
        const updatedFruits = [
            ...this.state.fruits
        ]
        updatedFruits[index] = updatedConut;
        this.setState({
            fruits: updatedFruits
        })
    }

    addItemHandle = (values) => {
        if (values) {
            this.setState(state => ({
                fruits: state.fruits.concat([values])
            }))
        }

        //console.log(JSON.stringify(this.state, null, 4))
    }

    render() {
        return (
            <Aux>
                <div> Groceries Cartcal App </div>
                <ListFruits
                    fruits={this.state.fruits}
                    addRemoveEventHandler={this.addRemoveEventHandler}
                />
                <AddItem addItem={this.addItemHandle}/>
            </Aux>
        )
    }
}

export default ListItems;
