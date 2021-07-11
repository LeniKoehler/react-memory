


var currentlyRevealedCards = [];

export function cardRevealedEvent(cardInfo) {
    currentlyRevealedCards.push(cardInfo);
    if (currentlyRevealedCards.length === 2) {
        if (currentlyRevealedCards[0].image === currentlyRevealedCards[1].image) {
            alert('Matching pair has been found!')
            currentlyRevealedCards.forEach(cardProbs => {
                cardProbs.status.pairFound = true;
            });
            currentlyRevealedCards = [];
            return true;
        } else {
            // TODO Hide both cards again or maybe not and force player to turn at least one card again 
            alert('Those cards did not match :(')
            currentlyRevealedCards.forEach(cardProbs => {
                cardProbs.status.pairFound = false;
                cardProbs.status.revealed = false;
            });
            currentlyRevealedCards = [];
        }
    } else {
        return false;
    }
}

export function cardFlippedBack(cardInfo) {
    let index = currentlyRevealedCards.indexOf(cardInfo);
    if (index > -1) {
        currentlyRevealedCards.splice(index, 1);
    }
}