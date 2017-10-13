import React from 'react';
import Section from "../Section/index";
import data from "../../data/basicgit";

export default class BasicGit extends React.Component {
  render() {
    return (
      <Section title="Git Básico" data={data} slug="basicgit" />
    )
  }
}
