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
      backgroundColor: '#FBEAAE',
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
    marginRight: 10,
      borderRadius:'50%',
      padding: 10
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


class Notification extends Component {
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
    url: `https://randomuser.me/api/?page=3&results=10`,
   
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
              <h2>Notifications</h2> 
        
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
             <div >
             <div className={classes.root}>
             <img  className={classes.cover} src={data.picture.medium} height={50} width={50} alt="img" />
             <div>
             <p style={{fontWeight:'bold'}}> {data.name.first} {data.name.last} </p>
             <Typography style={{position:'relative', bottom: 13,}} color="textSecondary">
            Sent you a messsage
          </Typography>
          </div>
          <Icon style={{ fontSize: 20, color: '#2EC71F', textAlign:'right', margin:25, right: 0, position: 'absolute' }}>check_circle</Icon>
</div>

</div>

    //    <Card  className={classes.root} onClick={() => history.push({pathname: `/Details/${data.id}`})}>
    //           <CardMedia
    //     className={classes.cover}
    //     image={data.picture.medium}
    //     title="Live from space album cover"
    //   />
    //   <div className={classes.details}>
    //     <CardContent className={classes.content}>
    //       <p style={{fontWeight: 'bold'}}>
    //        {data.name.first} {data.name.last} 
    //       </p>
    //       <Typography variant="subtitle1" color="textSecondary">
    //         Mac Miller
    //       </Typography>
    //     </CardContent>
     
    //   </div>
    
    // </Card>
         )
        })}
    </div>
  }
    </div>
    );
  }
}
Notification.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles)(Notification);
