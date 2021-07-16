import { useState, useEffect } from "react";
import MemCard from "./MemCard.js";
import reactImageLogo from "../img/logo-react.png";
import angular from "../img/angular.svg";
import node from "../img/logo-node.png";
import knockout from "../img/logo-knockout.png";

export default function MemGame(props) {
  const [refresh, setRefresh] = useState(false);
  const [game, setGame] = useState([]); //--> ?

  const images = [reactImageLogo, angular, node, knockout];

  useEffect(() => {
    const newGame = [];
    for (let i = 0; i < images.length; i++) {
      const firstCard = {
        id: 2 * i,
        pairFound: false,
        revealed: false,
        image: images[i],
      };

      const secondCard = {
        id: 2 * i + 1,
        pairFound: false,
        revealed: false,
        image: images[i],
      };

      newGame.push(firstCard);
      newGame.push(secondCard);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(shuffledGame);
  }, []);
  useEffect(() => {
    const finished = !game.some((card) => !card.revealed);
    if (finished && game.length > 0) {
      setTimeout(() => {
        let duration = (
          (new Date().getTime() - props.startTime) /
          1000
        ).toFixed(1);
        props.setLastScore(duration);
        if (
          parseFloat(duration) < parseFloat(props.score) ||
          props.score === 0
        ) {
          props.setScore(duration);
        }
      }, 500);
    }
  }, [refresh]);

  return (
    <div className="cardContainer">
      {game.map((card, index) => (
        <div className="card" key={index}>
          <MemCard refresh={refresh} setRefresh={setRefresh} status={card} />
        </div>
      ))}
    </div>
  );
}
