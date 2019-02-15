import React from 'react'
import { ListGroupItem, Badge } from 'reactstrap';

export default (props) => {
  let catName = ((props.todo.cat !== '') ? <Badge color={ ((props.todo.completed) ? "success" : "primary") }>{props.cats.find((c) => c.id === props.todo.cat).title}</Badge> : null);
  return (
    <ListGroupItem onClick={props.clickHandler} className={ ((props.todo.completed) ? "text-muted task-completed" : "text-primary hover") }>{catName} { props.todo.task }</ListGroupItem>
  );
}



