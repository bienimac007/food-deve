import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction  from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PrimaryNav from './Views/PrimaryNav';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Routes from './Views/Routes';


class App extends Component {

  constructor(props) {
    super(props);
   this.state = {
     token:'1234',
     userId: 'user',
     value: ''
   }
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({value: e.target.value})
  }
  render (){

    const {value} = this.state
  return (


    <Router>
    <div className="app">
      <Routes />        
      <PrimaryNav />
    </div>
  </Router>
  )
  }
}

export default App;
