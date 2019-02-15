import React from 'react';
import { Col } from 'reactstrap';

import Cat from './tiny/SingleCategorie';
import CatForm from './CatForm';

export default (props) => {
  return (
    <Col md="3" className="border border-light p-5">
      <CatForm typingHandler={props.typingHandler} formHandler={props.formHandler} />
      <div color="text" className="text-primary icon-text text-bold mt-4"><i className="material-icons pr-3">change_history</i><h5>Categories</h5></div>
      {props.cats.map((current, index) => (
        <Cat key={current.id} title={current.title} isActive={current.active} removeCat={props.removeCat} index={index} />
      ))}
      <div color="text" className="text-danger icon-text text-bold mt-4"><i className="material-icons pr-3">event</i><h5>Due Dates</h5></div>
    </Col>
  );
}