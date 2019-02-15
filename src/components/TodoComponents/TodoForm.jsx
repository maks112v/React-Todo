import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button, DropdownToggle, DropdownMenu, DropdownItem, InputGroupButtonDropdown  } from 'reactstrap';

export default (props) => {
  return (
    <div className="py-4">
      <form onSubmit={props.addTodo}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">New Task</InputGroupAddon>
          <Input placeholder="Your next task" value={props.todo} onChange={props.changeHandler} name="todo" required="required" />
          <InputGroupButtonDropdown addonType="append" isOpen={props.dropDownState} toggle={props.dropDownHandler}>
            <Button color="text" type="submit" className="btn btn-outline-primary">Add To List</Button>
            <DropdownToggle split outline />
            <DropdownMenu>
              <DropdownItem header>More Actions</DropdownItem>
              <DropdownItem className="text-success" onClick={props.filterHandler}>Clear Completed Tasks</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={props.resetHandler} className="text-danger">Clear Tasks</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
      </form>
    </div>
  );
}