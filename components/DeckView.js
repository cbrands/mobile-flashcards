import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { purple, white } from '../utils/colors';

export class DeckView extends Component {
    addCard = deckId => {
        this.props.navigation.navigate("AddCard", { deckId });
    };

    startQuiz = deckId => {
        this.props.navigation.navigate("Quiz", { deckId });
    };

    render() {
        const decks = Object.values(this.props.decks);
        const id = this.props.navigation.state.params.id;
        const deck = decks.filter(myDeck => myDeck.id === id)[0];
        return (
            <View style={styles.deckView}>
                <Text style={styles.text}>{deck.title}</Text>
                <Text style={styles.text}>{deck.cards.length} {deck.cards.length === 1 ? "Card" : "Cards"}</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.addCard(deck.id)} >
                    <Text style={styles.buttonText}> Add Card </Text>
                </TouchableOpacity>
                {deck.cards.length > 0 ? (
                    <TouchableOpacity style={styles.button} onPress={() => this.startQuiz(deck.id)}>
                        <Text style={styles.buttonText}> Start a Quiz </Text>
                    </TouchableOpacity>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    deckView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: white
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: purple,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    buttonText: {
        fontSize: 25,
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        color: white
    }
});

function mapStateToProps(decks) {
    return {
        decks: decks
    };
}

export default connect(mapStateToProps)(DeckView);