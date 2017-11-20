import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from './types';

export function addDeck(deckId, title) {
    return {
        type: ADD_DECK,
        deckId,
        title
    };
}

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    };
}

export function addCard(deckId, card) {
    return {
        type: ADD_CARD,
        deckId,
        card
    };
}