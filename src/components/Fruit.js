import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../components/Aux';
import Button from '../components/Button';
import './Fruit.css';


const Fruit = (props) => {

    return (
        <Aux key={props.fruit.label}>
       <td> {props.index + 1}</td>
       <td> {props.fruit.label}</td>
        <td>${(props.fruit.price).toFixed(2)}</td>
        <td>{props.fruit.value} </td>
        <td>${(props.fruit.value * props.fruit.price).toFixed(2)}</td>
        <td><Button class="button" 
                    buttonClickHandle={() => props.addFunc('+')} ><span> Add </span></Button></td>
                    <td> <Button class="button" 
                    buttonClickHandle={() => props.addFunc('-')}
                    disabled={props.fruit.value === 0}><span>Remove </span></Button></td>
            {/* <div key={props.fruit.label}> {props.fruit.label}  {(props.fruit.price).toFixed(2)} , {props.fruit.value} ,{(props.fruit.value * props.fruit.price).toFixed(2)}
                <Button
                    buttonClickHandle={() => props.addFunc('+')} > Add </Button>
                <Button
                    buttonClickHandle={() => props.addFunc('-')}
                    disabled={props.fruit.value === 0}>Remove </Button>
            </div> */}
        </Aux>
    )
};

Fruit.propTypes ={
    fruit: PropTypes.object,
    addFunc:PropTypes.func
}
export default Fruit;