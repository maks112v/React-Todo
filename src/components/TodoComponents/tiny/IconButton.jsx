import React from 'react'
import { Button } from 'reactstrap';

export default (props) => {
  let classes = `material-icons ${ props.active } h2 py-3`;
  return(
    <Button onClick={props.clickEvent} color="text"><i className={classes}>{ props.icon }</i></Button>
  );
}