import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
export default (props) => {
  return(
    <div className="mb-3">
      <InputGroup>
          <InputGroupAddon addonType="prepend">Search:</InputGroupAddon>
          <Input placeholder="Your next task" value={props.value} onChange={props.searchHandler} required="required" />
          <InputGroupAddon addonType="append"><Button onClick={props.clearSearch}>Clear</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
}