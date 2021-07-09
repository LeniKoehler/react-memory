import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import backsideImage from '../img/backside.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});



export default function MemCard(probs) {
  const [revealed, setRevealed] = useState(false);
  const [currentImage, setCurrentImage] = useState(backsideImage);
  const [pairFound, setPairFound] = useState(false);
  const classes = useStyles();

  function flipCard() {
    setCurrentImage(revealed ? probs.image : backsideImage);
    setRevealed(!revealed);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea disabled={pairFound} onClick={() => flipCard()}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          width="200"
          image={currentImage}
          title="React"
        />
      </CardActionArea>
    </Card>
  );
}