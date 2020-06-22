import React, { Component } from 'react';
import { makeStyles, useTheme , withStyles} from '@material-ui/core/styles';
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
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import history from './history';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  justify-content: center;
`;
const _ = require('underscore')
const useStyles = theme => ({
    root: {
      display: 'flex',
     marginBottom: 10,
     borderRadius: 10
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
     // flex: '1 0 auto',
      bottom: 25,
      position:'relative'
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })


class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bdata: [],
      bloading: true
    };
  }

  componentDidMount(){

this.setState({
    bloading: true,
  
})

  axios({
    method: 'get',
    url: `https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes`,
    headers: {'x-rapidapi-host': 'tasty.p.rapidapi.com', 'x-rapidapi-key': '327d9723f8msh9368dbe8e48c3c5p19612djsnae496d6e41c7', 'useQueryString': true}
  }).then(data => {
    this.setState({bdata:  _.shuffle(data.data.results),  bloading: false})
    console.log(data.data)
  }).catch(err => {
    console.log(err)
    this.setState({
        bloading: false
    })
  })
}
  render() {
    const { bdata } = this.state
    const { classes } = this.props;
   
    return (
        <div style={{margin: 10,  backgroundColor: '#FBFBFC', marginBottom: 60,}}>
              <h2>Favourites</h2> 
        
              {this.state.bloading ?   <div className="sweet-loading" >
        <ClipLoader
          css={override}
          size={150}
          color={"#F09902"}
          loading={this.state.bloading}
        />
      </div>
          
       : <div>
           {bdata.map(data => {
         
         return (
       <Card elevation={5} className={classes.root} onClick={() => history.push({pathname: `/Details/${data.id}`})}>
              <CardMedia
        className={classes.cover}
        image={data.thumbnail_url}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <p style={{fontWeight: 'bold'}}>
           {data.name}
          </p>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
     
      </div>
    
    </Card>
         )
        })}
    </div>
  }
    </div>
    );
  }
}
Favourite.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles)(Favourite);
