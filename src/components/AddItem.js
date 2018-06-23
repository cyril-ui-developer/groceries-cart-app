import React, { Component} from "react";
import serialForm from 'form-serialize';

import Aux from '../components/Aux';

class AddItem extends Component {

    handleSubmit =(e) =>{
        e.preventDefault()
        const values = serialForm(e.target, { hash: true });
        this.props.addItem(values);
    }
       render(){
        return (
            <Aux>
                <div> Add Item Form </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
          <input type="text" name="label" placeholder="Enter item name" />
                    </label>
                    <label>
                        Price:
          <input type="text" name="price" placeholder="Enter price" />
                    </label>
                    <label>
                        Quantity:
          <input type="number" name="quantity" placeholder="Enter quantity" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </Aux>
        )
    }
}

export default AddItem;