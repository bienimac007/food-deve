import React, { Component } from 'react';
import { Card, CardHeader , CardMedia , CardContent , CardActions, Input } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import food from './food1.jpg';
import HorizontalScroll from 'react-scroll-horizontal'
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HorizontalScroller from 'react-horizontal-scroll-container';
import history from './history';
import axios from 'axios'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/BounceLoader";
import PropTypes from 'prop-types';
import { makeStyles, useTheme , withStyles} from '@material-ui/core/styles';

const _ = require('underscore')

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  justify-content: center;
`;
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


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      title: 'Break Fast',
      bdata: [],
      bloading: true
    };
  }

getData(){
  this.setState({
    loading: true
  })
  
    axios({
      method: 'get',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      headers: {'x-rapidapi-host': 'tasty.p.rapidapi.com', 'x-rapidapi-key': '327d9723f8msh9368dbe8e48c3c5p19612djsnae496d6e41c7', 'useQueryString': true}
    }).then(data => {
       this.setState({data: _.shuffle(data.data.results),  loading: false})
      console.log(_.shuffle(data.data))
    }).catch(err => {
      console.log(err)
      this.setState({
        loading: false
      })
    })
}
getDatabottom(){
  this.setState({
    bloading: true
  })
  
    axios({
      method: 'get',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      headers: {'x-rapidapi-host': 'tasty.p.rapidapi.com', 'x-rapidapi-key': '327d9723f8msh9368dbe8e48c3c5p19612djsnae496d6e41c7', 'useQueryString': true}
    }).then(data => {
       this.setState({bdata: _.shuffle(data.data.results),  bloading: false})
      console.log(_.shuffle(data.data))
    }).catch(err => {
      console.log(err)
      this.setState({
        bloading: false
      })
    })
}

componentDidMount(){

this.getData()
this.getDatabottom()
}
  render() {
const {data, title, bdata} = this.state;
const { classes } = this.props;
const length = data.length
    return (
      <div style={{margin: 10,  backgroundColor: '#FBFBFC', marginBottom: 60,}}>
       <div style={{backgroundColor: '#E9ECF2', borderRadius: 10}} className="card-input">
         <div style={{marginTop: 9, left: 10, position: 'relative'}}>
         <Icon>search</Icon>
         </div>
         <div  style={{marginLeft: 20}}>
        <Input placeholder="search" />
         </div>
       </div>

       <div  >
        <h2>{title}</h2> 
        <div style={{width: '100%', height: '100%' , display: 'flex'  }}>
          {this.state.loading ?   <div className="sweet-loading" style={{marginLeft: 90}}>
        <ClipLoader
          css={override}
          size={150}
          color={"#F09902"}
          loading={this.state.loading}
        />
      </div>
          
       : <HorizontalScroller >
     
         {this.state.data.map(data => {
         
           return (
             <div key={data.id} style={{marginLeft: 5, marginRight: 5,  }} onClick={() => history.push({pathname: `/Details/${data.id}`})}>
        <Card style={{width: 300, height: 200 , borderRadius: 10 }} elevation={5}>
        <img src={data.thumbnail_url} height="100%" width="100%" alt="img" />

        </Card>
        <Card elevation={5} style={{width: 250,  bottom: 50,position: 'relative',  marginLeft: 23, borderRadius: 10, display: 'flex', alignContent: 'center', justifyContent: 'center', maxHeight: 100}}>
         <span style={{textAlign:'center', }}>
         <h5 >{data.name}</h5>
         <div style={{bottom: 20, position: 'relative',}}>
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center',}}>
          <Icon style={{ fontSize: 20, color: '#777' ,  position: 'relative', bottom: 23, textAlign:'center'}}>deck</Icon>
           <p style={{bottom: 32, position: 'relative', fontSize: 13, fontWeight: 'bold', marginLeft: 5, color: '#777' , textAlign:'center'}}>{`${data.show.name}`}</p>
           <p style={{bottom: 32, position: 'relative', fontSize: 13, fontWeight: 'bold', marginLeft: 5, color: '#000' ,}}>{`$${data.show_id}`}</p>
            </div>
         </span>
        
        </Card>
        </div>
           )
  })}
  
  </HorizontalScroller>
  }
  
        </div>

        </div>
       <div style={{position: 'relative', bottom: 20}}>
       <h2>Meal Type</h2> 
         <div style={{  display: 'flex',
  flexDirection: 'row',  justifyContent:'space-around', marginBottom:10}}>
           <Card elevation={10} style={{ margin: 10, borderRadius: 10}}  onClick={() => {this.getData(); this.setState({title:  ' Break Fast'})}}>
           <Icon style={{ fontSize: 55, color: '#F09902' }}>free_breakfast</Icon>
         
           </Card>
           
           <Card onClick={() => {this.getData(); this.setState({title:  'Lunch'})}} elevation={10} style={{ margin: 10, borderRadius: 10}}>
           <Icon style={{ fontSize: 60, color: '#F09902' }}>deck</Icon>
           </Card>
           <Card onClick={() => {this.getData(); this.setState({title:  'Dinner'})}} elevation={10} style={{ margin: 10, borderRadius: 10}}>
           <Icon style={{ fontSize: 60, color: '#F09902' }}>local_bar</Icon>
           </Card>
           <Card onClick={() => {this.getData(); this.setState({title:  ' Dessert'})}} elevation={10} style={{ margin: 10, borderRadius: 10}}>
           <Icon style={{ fontSize: 60, color: '#F09902' }}>local_dining</Icon>
           </Card>
         </div>
       </div>
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles) (Home);
