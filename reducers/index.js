import { ADD_DECK, RECEIVE_DECKS } from "../actions/types";

function deck(state = {}, action) {
    switch (action.type) {
        case ADD_DECK: {
            const { id, title } = action
            return {
                ...state,
                [id]: { title: title, cards: [] }
            }
        }
        case RECEIVE_DECKS:
            return {
                decks: action.decks
            };
        default:
            return state;
    }
}

export default deck;