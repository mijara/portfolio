import React, { Component } from 'react';
import './style.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Landing from "../Landing";
import GoRust from "../GoRust";
import BasicGit from "../BasicGit";
import Body from "../Body";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/s/gorust"
                 render={() => <Body><GoRust/></Body>}/>
          <Route path="/s/basicgit"
                 render={() => <Body><BasicGit/></Body>}/>
          <Route component={Landing}/>
        </Switch>
      </HashRouter>
    );
  }
}
