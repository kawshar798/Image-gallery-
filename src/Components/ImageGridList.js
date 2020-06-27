import React,{useState,useEffect} from 'react';
import  { makeStyles } from '@material-ui/core/styles';
import  { GridList,GridListTile,GridListTileBar   } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { API_URL, API_KEY} from "../config";
import CardImage from './CardImage';
const useStyles = makeStyles( (theme) => ({
    container:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(320px,auto))',
        gridGap: '20px',
    backgroundColor: theme.palette.background.paper,
    },
   

}));

const ImageGridList = () => {
    const classes = useStyles();
    const [photos,setPhotos] = useState([]);

    const fetchPhotos = async endpoint => {
    try{
        const result = await (await fetch(endpoint)).json();
        setPhotos(result)
    }catch(error){
        console.log(error);
    }
    }


useEffect(() =>{
    fetchPhotos(API_URL+API_KEY);
    
  
},[])

    return (
        <div className={classes.container}>
            { console.log(photos)}
                {
                   
                      photos.map((item) => (
                        <CardImage key={item.id}  firstName={item.user.first_name} lastName={item.user.last_name}  title={item.alt_description}  src={item.urls.regular}  />
                      ))
                  }
        </div>
    );
};

export default ImageGridList;