import React from "react";
import {Container} from "reactstrap";
import Navbar from "./Navbar/index";

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>

        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  }
}
