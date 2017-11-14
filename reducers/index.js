import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from "../actions/types";

function deck(state = {}, action) {
    switch (action.type) {
        case ADD_DECK: {
            const {id, title} = action
            return {
                ...state,
                [id]: {id, title, cards: []}
            }
        }
        case RECEIVE_DECKS:
            return {
                decks: action.decks
            };
        case ADD_CARD: {
            const {deckId, id, question, answer} = action
            const newCard = {
                id,
                question,
                answer
            }
            return {
                ...state,
                [deckId]: {
                    ...state[deckId],
                    cards: [...state[deckId].cards, newCard]
                }
            };
        }
        default:
            return state;
    }
}

export default deck;