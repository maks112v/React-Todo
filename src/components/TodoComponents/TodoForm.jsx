import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button, ButtonGroup } from 'reactstrap';

export default (props) => {
  return (
    <div className="py-4">
      <form onSubmit={props.addTodo}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">New Task:</InputGroupAddon>
          <Input placeholder="Your next task" value={props.todo} onChange={props.changeHandler} name="todo" required="required" />
          <InputGroupAddon addonType="append">
            <Button color="text" type="submit" className="btn btn-outline-primary">Add To List</Button>
            <Button color="success" onClick={props.filterHandler}>Clear Completed Tasks</Button>
            <Button color="danger" onClick={props.resetHandler}>Clear Tasks</Button>
            </InputGroupAddon>
        </InputGroup>
        <br/>
        
      </form>
    </div>
  );
}