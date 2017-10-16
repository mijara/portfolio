import React from "react";
import {Container} from "reactstrap";
import Navbar from "./Navbar/index";

const Body = ({title, subtext, hometext, children}) =>
  <div>
    <Navbar title={title} subtext={subtext} hometext={hometext}/>

    <Container>
      {children}
    </Container>
  </div>;

export default Body;
