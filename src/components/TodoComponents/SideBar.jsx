import React from 'react';
import { Col } from 'reactstrap';

import IconButton from './tiny/IconButton';

export default (props) => {
  return(
    <Col md="1" className="bg-primary">
      <img src="/logo.png" alt="" className="py-3" />
      <div className="text-center ">
        <IconButton icon="inbox" active="text-light" />
        <IconButton icon="star" active="text-not-active" />
        <IconButton icon="settings" clickEvent={props.darkHandler} active="text-not-active" />
      </div>
    </Col>
  );
}