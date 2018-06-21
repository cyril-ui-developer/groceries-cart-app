import React, {Component} from 'react';

import Aux from '../components/Aux';
import ListFruits from '../components/ListFruits';
//import Model from '../components/models/Model';

class ListItems extends Component {
 state = {
   fruits :[
     {label: "Apple", value:2, price:0.95},
     {label: "Orange", value:1, price:0.75},
     {label: "Banana", value:4, price:1.50},
     {label: "Tangerine", value:0, price:2.45}
   ]
}
  // fruits :{
  //    apple: "Apple",
  //    orange: "Orange",
  //    banana: "Banana",
  //    tangerine: "Tangerine"
  //  }

  addRemoveEventHandler = (obj, index, sign) =>{
    let updatedConut = 0;
    if(sign === '+'){
        updatedConut = obj.value + 1;
    }else if(sign === '-' && obj.value > 0){
         updatedConut = obj.value - 1; 
    }else{
             alert("You have no fruit to remove")
      return updatedConut;
    }
   
    updatedConut = { label: obj.label, value:updatedConut, price:obj.price}
    const updatedFruits = [
      ...this.state.fruits
    ]
    updatedFruits[index] = updatedConut;
    this.setState({
      fruits: updatedFruits 
    })
  }

  render(){
    return (
      <Aux>
        <div> Groceries Cartcal App </div>
        <ListFruits 
             fruits = {this.state.fruits}
             addRemoveEventHandler={this.addRemoveEventHandler}
        />
  
      </Aux>
    )
  }
}

export default ListItems;
