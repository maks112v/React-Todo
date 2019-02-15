import React from 'react';
import { InputGroup, Input, Button, InputGroupAddon  } from 'reactstrap';

export default (props) => {
  return(
    <form onSubmit={props.formHandler}>
      <InputGroup className="mb-4">
        <Input placeholder="New Category" value={props.todo} onChange={props.typingHandler} name="cat" required="required" />
        <InputGroupAddon addonType="append">
          <Button color="text" type="submit" className="btn btn-primary">Add</Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}