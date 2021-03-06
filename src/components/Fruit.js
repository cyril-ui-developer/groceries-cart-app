import React from "react";
import PropTypes from "prop-types";

import Aux from "../components/Aux";
import Button from "../components/Button";
import "./Fruit.css";

const Fruit = props => {
  return (
    <Aux key={props.fruit.label}>
      <td> {props.index + 1}</td>
      <td> {props.fruit.label}</td>
      <td>${parseFloat(props.fruit.price).toFixed(2)}</td>
      <td>{props.fruit.quantity} </td>
      <td>
        ${(props.fruit.quantity * parseFloat(props.fruit.price)).toFixed(2)}
      </td>
      <td>
        <Button class="button" buttonClickHandle={() => props.addFunc("+")}>
          <span> Add </span>
        </Button>
      </td>
      <td>
        {" "}
        <Button
          class="button"
          buttonClickHandle={() => props.addFunc("-")}
          disabled={props.fruit.quantity === 0}
        >
          <span>Remove </span>
        </Button>
      </td>
    </Aux>
  );
};

Fruit.propTypes = {
  fruit: PropTypes.object,
  addFunc: PropTypes.func
};
export default Fruit;
