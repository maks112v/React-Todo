import React from 'react';
import { ListGroup } from 'reactstrap';

import "./Todo.css"

import ListItem from './Todo';

export default (props) => {
  return(
    <ListGroup>
      {props.todos.map((current, index) => (
      <ListItem key={current.id} todo={current} clickHandler={() => props.clickHandler(index)} />
      ))}
    </ListGroup >
  );
}