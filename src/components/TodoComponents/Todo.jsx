import React from 'react'
import { ListGroupItem } from 'reactstrap';

export default (props) => <ListGroupItem onClick={props.clickHandler} className={ ((props.todo.completed) ? "text-muted task-completed" : "text-primary hover") }>{ props.todo.task }</ListGroupItem>