import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import backsideImage from '../img/backside.png'
import { cardRevealedEvent, cardFlippedBack } from './MemController.js'


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});


var currentlyRevealedCards = [];

function useForceUpdate() {
  const [value, setValue] = useState(0); //integer state
  return () => setValue(value => value + 1); //update the state to force render
}

export default function MemCard(probs) {
  // const [revealed, setRevealed] = useState(false);
  const [currentImage, setCurrentImage] = useState(backsideImage);
  const [pairFound, setPairFound] = useState(false);

  const classes = useStyles();

  const forceUpdate = useForceUpdate();

  function flipCard() {
    //füge karte zu array hinzu
    currentlyRevealedCards.push(probs);
    //wenn array.size = 2 dann
    if (currentlyRevealedCards.length === 2) {
      //prüfe ob images gleich
      if (currentlyRevealedCards[0].status.image === currentlyRevealedCards[1].status.image) {
        //wenn images gleich, setze forEach karte pairFound = true
        alert('Matching pair has been found!')
        currentlyRevealedCards.forEach(cardProbs => {
          cardProbs.status.pairFound = true;
          console.log(cardProbs);
          console.log(currentlyRevealedCards.length);
          console.log(cardProbs.status.id);
          console.log(cardProbs.status.pairFound);
        });
        currentlyRevealedCards = [];

        //wenn images ungleich, setze forEach karte revealed = false
      } else {
        alert('Those cards did not match :(')
        currentlyRevealedCards.forEach(cardProbs => {
          cardProbs.status.pairFound = false;
          cardProbs.status.revealed = false;
          cardProbs.status.image = backsideImage;
        });
        currentlyRevealedCards = [];
      }
    } else {

    }
    // useEffect(() => {

    // }, [probs]);
    probs.status.revealed = !probs.status.revealed;
    if (!probs.status.revealed)
      cardFlippedBack(probs);

    setCurrentImage(probs.status.revealed ? probs.status.image : backsideImage);

  }

  return (
    <Card className={classes.root}>
      <CardActionArea disabled={probs.status.pairFound} onClick={() => flipCard()}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          width="200"
          image={currentImage}
          title="React"
        />
      </CardActionArea>
    </Card >
  );
}