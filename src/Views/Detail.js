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



class Detail extends Component {
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

  axios({
    method: 'get',
    url: `https://tasty.p.rapidapi.com/recipes/detail?id=${this.props.match.params.id}`,
    headers: {'x-rapidapi-host': 'tasty.p.rapidapi.com', 'x-rapidapi-key': '327d9723f8msh9368dbe8e48c3c5p19612djsnae496d6e41c7', 'useQueryString': true}
  }).then(data => {
    this.setState({data: data.data,  loading: false})
    console.log(data.data)
  }).catch(err => {
    console.log(err)
    this.setState({
      loading: false
    })
  })
}
  render() {
    const { data } = this.state

    console.log('my fetch', data)
    return (
        <div style={{height: '100%', marginBottom: 60}} >
            {this.state.loading ?   <div  style={{display: 'flex', margin: '50%',  flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center', textAlign: 'center'}}><div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          color={"#F09902"}
          loading={this.state.loading}
        />
      </div>
      </div>
       :  <Card >
        <CardActionArea>
        <img src={data.thumbnail_url}  width="100%" alt="logo" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {data.name}
            </Typography>
            <span style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
         <div>
            <div style={{bottom: 10, position: 'relative',}}>
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
          <Icon style={{ fontSize: 20, color: '#F09902' }}>star</Icon> 
        
          </div>
          <div style={{bottom: 25, position: 'relative', marginRight:5, marginBottom: -25}}>
          <h5>25 Reviews</h5>
          <h1>{`$${data.show_id}/Plate`}</h1>
            </div>
            </div>
            <div>

            </div>
            
            </span>
          
            {data.instructions.length > 1 && (
                <div>
            <hr/>
            <h3>Description</h3>
        
              <ul> 
                
           {data.instructions.map(data => {

             return(
              <li>{data.display_text}</li> 
             )
           })}
           
           </ul>
           </div>
         )}
      
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
          
 
  }
      </div>
    );
  }
}

export default Detail;
