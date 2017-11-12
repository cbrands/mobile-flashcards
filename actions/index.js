import { ADD_DECK, RECEIVE_DECKS } from './types';
import { makeId } from '../utils/helper';

export function addDeck(title) {
    const id = makeId();
    return {
        type: ADD_DECK,
        id,
        title
    };
}

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    };
}