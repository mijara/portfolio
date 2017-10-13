import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './style.css';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
  render () {
    return (
      <div style={{backgroundColor: '#fafafa'}}>
        <Container className="Navbar-container">
          <Row>
            <Col xs={12}>
              <h2>Marcelo Jara Almeyda</h2>

              <strong>
                <Link to="/">Inicio</Link>
              </strong>
              {' '} | {' '}
              <strong className="text-muted">Documentos y otros</strong>
            </Col>
          </Row>
        </Container>
        <hr/>
      </div>
    )
  }
}
