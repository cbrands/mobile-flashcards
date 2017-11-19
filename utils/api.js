import { AsyncStorage } from "react-native";

const DECKS_KEY = "UdaciCards:decks";

export function storeDeck(deckId, title) {
    return AsyncStorage.mergeItem(
        DECKS_KEY,
        JSON.stringify({
            [deckId]: {
                deckId,
                title,
                cards: []
            }
        })
    );
}

export async function retrieveDecks() {
    //To clean up the local storage uncomment the line below and start the application
    //AsyncStorage.removeItem(DECKS_KEY);
    return AsyncStorage.getItem(DECKS_KEY, (err, result) => {
        if (result === null) {
            return { decks: {} };
        } else {
            return JSON.parse(result);
        }
    });
}

export function storeCard(id, card) {
    return AsyncStorage.getItem(DECKS_KEY).then(result => {
        const data = JSON.parse(result);
        data[id].cards.push(card);
        AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
    });
}
