import React from "react";
import './style.css';
import {connect} from "react-redux";
import SectionBlock from '../SectionBlock';

class Section extends React.Component {
  render() {
    const {section} = this.props;

    return (
      <SectionBlock section={section}/>
    )
  }
}

export default Section = connect((state, props) => {
  const {slug} = props.match.params;

  return {
    section: state.sections.all.find((o) => o.slug === slug)
  };
})(Section);
