import React from 'react';
import GoRust from "../GoRust";
import BasicGit from "../BasicGit";
import Body from "../Body";

export default class Landing extends React.Component {
  render() {
    return (
      <Body>
        <GoRust/>
        <BasicGit/>
      </Body>
    )
  }
}
