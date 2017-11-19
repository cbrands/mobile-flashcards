import React, { Component } from 'react';
import { Dimensions, Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { white, black, lavender } from '../utils/colors';


export class DeckListView extends Component {

    selectDeck = deckId => {
        this.props.navigation.navigate("Deck", { deckId })
    }

    render() {
        if (this.props.decks === null) {
            return (
                <View style={styles.deckListView}>
                    <Text style={styles.text}>You have not yet created any decks.</Text>
                    <Text style={styles.text}>Use the "New Deck" tab to add a deck.</Text>
                </View>
            );
        }

        const navigation = this.props.navigation;
        return (
            <View style={styles.deckListView}>
                <FlatList
                    data={Object.values(this.props.decks)}
                    renderItem={({ item: { deckId, title, cards } }) => {
                        return (
                            <TouchableOpacity style={styles.flatListItem} onPress={() => this.selectDeck(deckId)} >
                                <Text style={styles.text}>{title}</Text>
                                <Text style={styles.text}>{cards.length} {cards.length === 1 ? "Card" : "Cards"}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.title}
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
    deckListView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: white
    },
    text: {
        fontSize: 20
    },
    flatListItem: {
        flex: 0.9,
        backgroundColor: lavender,
        alignItems: "center",
        justifyContent: "center",
        borderColor: black,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        height: 70,
        width: dimensions.width * 0.9
    },
    item: {
        //flex: 0.9,
        width: dimensions.width
    }
});

export default connect(mapStateToProps)(DeckListView);