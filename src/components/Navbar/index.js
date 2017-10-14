import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './style.css';
import {Link} from "react-router-dom";

const Navbar = ({title, subtext}) =>
  <div style={{backgroundColor: '#fafafa'}}>
    <Container className="Navbar-container">
      <Row>
        <Col xs={12}>
          <h2>{title}</h2>

          <strong>
            <Link to="/">Inicio</Link>
          </strong>
          {' '} | {' '}

          <strong className="text-muted">{subtext}</strong>
        </Col>
      </Row>
    </Container>
    <hr/>
  </div>;

export default Navbar;
