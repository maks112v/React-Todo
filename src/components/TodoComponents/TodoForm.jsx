import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

export default (props) => {
  return (
    <div className="py-4">
      <form onSubmit={props.addTodo}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Task:</InputGroupAddon>
          <Input placeholder="Your next task" value={props.todo} onChange={props.changeHandler} name="todo" required="required" />
        </InputGroup>
        <br/>
        <Button color="text" type="submit" className="btn btn-outline-primary">Add To List</Button>
        <Button className="ml-4" color="success" onClick={props.filterHandler}>Clear Completed Tasks</Button>
        <Button className="ml-4" color="danger" onClick={props.resetHandler}>Clear Tasks</Button>
      </form>
    </div>
  );
}