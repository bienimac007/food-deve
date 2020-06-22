import React, {Component} from 'react';
import {Link, withRouter, Redirect } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Card, CardHeader , CardMedia , CardContent , CardActions } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import '../App.css';
import Icon from '@material-ui/core/Icon';
import Home from "./Home";
import history from './history';

class PrimaryNav extends Component {
  state = {
    value: 0,
    pathMap: [
      `/`,
      '/favorite',
      '/notification',
      '/account',
     
    ]
  };

  componentWillReceiveProps(newProps) {
    const {pathname} = newProps.location;
    const {pathMap} = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
  
    this.setState({ value });
    history.push(`/${value}`);
 
  };

  render() {
    const {value, pathMap} = this.state;

    return (
      
      <Card  elevation={ 10} className="App">
  
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="root"
        
      >
        <BottomNavigationAction value=""  icon={<Icon > home </Icon>} component={Link} to={pathMap[0]} />

        <BottomNavigationAction value="favorite" icon={<Icon > favorite_border </Icon>} component={Link} to={pathMap[1]} />
        <BottomNavigationAction value="notification" icon={<Icon > notifications </Icon>} component={Link} to={pathMap[2]} />
        <BottomNavigationAction value="account"  icon={<Icon > person_outline </Icon>} component={Link} to={pathMap[3]} />
      
      </BottomNavigation>
   
      </Card>
    
    );
  }
}

export default withRouter(PrimaryNav);