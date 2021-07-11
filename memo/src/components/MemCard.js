import React, { useState, useEffect } from 'react';
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

var currentlyRevealedCards = [];
var i = 0;

export default function MemCard(props) {
  // const [revealed, setRevealed] = useState(false);
  const [currentImage, setCurrentImage] = useState(backsideImage);
  const [pairFound, setPairFound] = useState(false);

  const classes = useStyles();

  function flipCard() {
    //füge karte zu array hinzu
    currentlyRevealedCards.push(props);
    props.status.revealed = !props.status.revealed;
    setCurrentImage(props.status.revealed ? props.status.image : backsideImage);
    // Refresh the MemCard components
    props.setRefresh(!props.refresh);
  }


  useEffect(() => {
    if (currentlyRevealedCards.length === 2 && i < 2) {
      if (currentlyRevealedCards[0].status.image === currentlyRevealedCards[1].status.image) {
        if (props.status.id === currentlyRevealedCards[0].status.id || props.status.id === currentlyRevealedCards[1].status.id) {
          props.status.pairFound = true;
          i++;
        }
        if (i === 2) {
          currentlyRevealedCards = [];
          i = 0;
          alert("It is a match!")
        }
      } else {
        if (props.status.id === currentlyRevealedCards[0].status.id || props.status.id === currentlyRevealedCards[1].status.id) {
          setTimeout(() => {
            props.status.revealed = false;
            setCurrentImage(backsideImage);
          }, 1000)

          i++;
          if (i === 2) {
            currentlyRevealedCards = [];
            i = 0;
          }
        }
      }
    } else {

    }

    // console.log("id: " + props.status.id + " pairFound: " + props.status.pairFound);
    if (props.status.pairFound) {
      setPairFound(true);
    }
    // console.log("refresh!");

  }, [props.refresh]);
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
    </Card >
  );
}