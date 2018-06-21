import React from 'react';
//import PropTypes from 'prop-types';
import { PropTypes, shape, number, string } from 'prop-types';

import Fruit from './Fruit';
import Aux from './Aux';
import './ListFruits.css';
import TotalItemsCost  from '../components/TotalItemsCost';

const ListFruits = (props) => {

// const transformedObj = Object.keys(props.fruits)
// .map(key =>{ return [...Array(props.fruits[key])]
// .map((_,i) => { return key }) })


const transformedObj = props.fruits.map((key, index) => {
  return (
  <tr  key={key.label + index}>
  <Fruit 
         index={index}
          fruit={key} 
           addFunc ={(sign)=> props.addRemoveEventHandler(key,index, sign)}
           />
     </tr>    
  )
})

  return (
        <Aux>
   
              <table id="customers">
              <tbody>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th colSpan="2">Actions</th>

    </tr>
    {transformedObj} 

    <tr>
      <td colSpan="4"> <strong>Grand Total: </strong></td>
     <td><TotalItemsCost fruits={props.fruits} /></td>
     <td colSpan="2"></td>
    </tr>
   </tbody>
    </table>

        </Aux>
      )
}

ListFruits.propTypes ={
  addRemoveEventHandler: PropTypes.func,
  fruits: PropTypes.arrayOf(shape({
    label: string, value:number, price:number
  }).isRequired)
}

export default ListFruits;