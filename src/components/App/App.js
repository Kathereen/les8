import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Page1 from "../Page1";
import Page2 from "../Page2";
import HomePage from '../HomePage';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App"> App
      <Router>
  {/* <Switch> */}
      <Route path='' component={HomePage} />
      <Route path='/page1'  component={Page2}/>
      <Route path='/page2'  component={Page1}/>
  {/* </Switch>     */}
      </Router>
      
    </div>
  )}

}

export default App;
