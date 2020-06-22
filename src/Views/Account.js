import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import food from './food1.jpg';
import Icon from '@material-ui/core/Icon';
import axios from 'axios'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/BounceLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  justify-content: center;
`;



class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true
    };
  }

  componentDidMount(){

this.setState({
  loading: true,
  
})

//   axios({
//     method: 'get',
//     url: `https://tasty.p.rapidapi.com/recipes/detail?id=${this.props.match.params.id}`,
//     headers: {'x-rapidapi-host': 'tasty.p.rapidapi.com', 'x-rapidapi-key': '327d9723f8msh9368dbe8e48c3c5p19612djsnae496d6e41c7', 'useQueryString': true}
//   }).then(data => {
//     this.setState({data: data.data,  loading: false})
//     console.log(data.data)
//   }).catch(err => {
//     console.log(err)
//     this.setState({
//       loading: false
//     })
//   })
}
  render() {
    const { data } = this.state

    console.log('my fetch', data)
    return (
        <div style={{height: '100%', marginBottom: 60}} >
        
          
 hi beu
  
      </div>
    );
  }
}

export default Account;
