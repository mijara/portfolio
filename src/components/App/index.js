import React, {Component} from 'react';
import './style.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Landing from "../Landing";
import {connect} from "react-redux";
import {fetchSections} from "../../actions";
import Section from "../Section";
import Document from "../Document";
import Body from '../Body';

export const parseLink = (link) => {
  if (link.startsWith('self://')) {
    return `#${link.substring(7)}`
  }
  return link;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchSections();
  }

  render() {
    const {meta} = this.props;

    return (
      <HashRouter>
        <Body {...meta}>
        {
          this.props.loaded ?
            <Switch>
              <Route path="/s/:slug" component={Section}/>
              <Route path="/d/:slug" component={Document}/>
              <Route component={Landing}/>
            </Switch>
            : null
        }
        </Body>
      </HashRouter>
    );
  }
}

export default App = connect(
  (state) => ({
    meta: state.meta,
    loaded: state.sections.loaded
  }),
  {
    fetchSections
  }
)(App);
