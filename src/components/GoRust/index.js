import React from "react";
import Section from "../Section";
import data from '../../data/gorust';

export default class GoRust extends React.Component {
  render() {
    return (
      <Section title="Introducción a Lenguajes Modernos: Go y Rust" data={data} slug="gorust"/>
    )
  }
}
