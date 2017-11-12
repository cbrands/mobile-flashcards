import { AsyncStorage } from "react-native";
import tolower from "lodash.tolower";

const STORAGE_KEY = "storagekey:decks2";

export function storeDeck(title) {
    return (
        JSON.stringify({
            [id]: {
                title: title,
                questions: []
            }
        })
    );
    // const id = tolower(title);
    // return AsyncStorage.mergeItem(
    //     STORAGE_KEY,
    //     JSON.stringify({
    //         [id]: {
    //             title: title,
    //             questions: []
    //         }
    //     })
    // );
}

export function retrieveDecks() {
    return { decks: {} };
    // AsyncStorage.clear();
    // console.log('keys', AsyncStorage.getAllKeys());
    // // AsyncStorage.removeItem('_40');
    // return AsyncStorage.getItem(STORAGE_KEY, (error, result) => {
    //     if (result === null) {
    //         return { decks: {} };
    //     }
    //     return JSON.parse(result);
    // });
}


