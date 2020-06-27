import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        
     
    },
});
const CardImage = ({title,src,lastName,firstName}) => {
    const classes = useStyles();
    return (
        <>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={src}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        By  {firstName} {lastName}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    );
};

export default CardImage;