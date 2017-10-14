import React from 'react';
import SectionBlock from '../SectionBlock';
import {connect} from "react-redux";

class Landing extends React.Component {
  render() {
    const {sections} = this.props;

    return (
      <div>
        {sections.map((section, i) =>
          <SectionBlock section={section} key={i}/>
        )}
      </div>
    )
  }
}

export default Landing = connect(
  (state) => ({
    sections: state.sections.all,
  })
)(Landing)
