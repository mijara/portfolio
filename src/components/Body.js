import React from "react";
import {Container} from "reactstrap";
import Navbar from "./Navbar/index";

class Body extends React.Component {
  componentDidUpdate() {
    const {title} = this.props;
    document.title = title;
  }

  render() {
    const {title, subtext, hometext, children} = this.props;

    return (
      <div>
        <Navbar title={title} subtext={subtext} hometext={hometext}/>

        <Container>
          {children}
        </Container>
      </div>
    )
  }
}

export default Body;
