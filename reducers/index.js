import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from "../actions/types";

function deck(state = {decks: {}}, action) {
    switch (action.type) {
        case ADD_DECK: {
            const {deckId, title} = action;
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [deckId]: {deckId, title, cards: []}
                }
            };
        }
        case RECEIVE_DECKS:
            return {
                ...state,
                decks: action.decks
            };
        case ADD_CARD: {
            const {deckId, card} = action;
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [deckId]: {
                        ...state.decks[deckId],
                        cards: [...state.decks[deckId].cards, card]
                    }
                }
            };
        }
        default:
            return state;
    }
}

export default deck;