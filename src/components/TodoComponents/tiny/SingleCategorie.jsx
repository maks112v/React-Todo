import React from 'react';
import { Button, Row } from 'reactstrap';

export default (props) => {
  let classes = (((props.active === true) ? "text-primary" : "text-muted"));
  return (
    <Row>
      <Button color="text" onClick={() => props.removeCat(props.index)} className="text-danger"><i className="material-icons">delete_outline</i></Button><Button color="text" className={ classes }>{ props.title }</Button>
    </Row>
  );
}
