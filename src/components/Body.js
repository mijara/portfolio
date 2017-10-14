import React from "react";
import {Container} from "reactstrap";
import Navbar from "./Navbar/index";

const Body = ({title, subtext, children}) =>
  <div>
    <Navbar title={title} subtext={subtext}/>

    <Container>
      {children}
    </Container>
  </div>;

export default Body;
