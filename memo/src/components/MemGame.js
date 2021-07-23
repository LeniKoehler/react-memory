import { useState, useEffect } from "react";
import MemCard from "./MemCard.js";
import reactImageLogo from "../img/logo-react.png";
import angular from "../img/angular.svg";
import node from "../img/logo-node.png";
import knockout from "../img/logo-knockout.png";
import vue from "../img/logo-vue.png";
import jquery from "../img/logo-jquery.png";
import ember from "../img/logo-ember.png";
import bootstrap from "../img/logo-bootstrap.png";
import meteor from "../img/logo-meteor.png";

export default function MemGame(props) {
    const [refresh, setRefresh] = useState(false);
    const [game, setGame] = useState([]);

    const images = [
        reactImageLogo,
        angular,
        node,
        knockout,
        vue,
        jquery,
        ember,
        bootstrap,
        meteor,
    ];

    useEffect(() => {
        // Set up a new game when this component gets rerendered
        const newGame = [];

        // Create the two card pairs from the images
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

        // Shuffle the cards
        const shuffledGame = newGame.sort(() => Math.random() - 0.5);

        // Set the new game
        setGame(shuffledGame);
    }, []);

    useEffect(() => {
        // Only execute this code when a MemCard updates the refresh state

        // Find out if all card pairs have been found
        const finished = !game.some((card) => !card.pairFound);
        if (finished && game.length > 0) {

            // Delay the result
            setTimeout(() => {

                // Get the duration since the game started and subtract the dalay
                let duration = (
                    (new Date().getTime() - props.startTime - 1000) /
                    1000
                ).toFixed(1);

                props.setLastScore(duration);

                // Check if the player was faster than the highscore
                if (
                    parseFloat(duration) < parseFloat(props.score) ||
                    props.score === 0
                ) {
                    props.setScore(duration);
                }

            }, 1000);
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
