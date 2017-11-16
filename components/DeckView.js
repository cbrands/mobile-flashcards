import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

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
        const navigation = this.props.navigation;
        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>{deck.cards.length} {deck.cards.length === 1 ? "Card" : "Cards"}</Text>
                <TouchableOpacity onPress={() => this.addCard(deck.id)} >
                    <Text>Add Card</Text>
                </TouchableOpacity>
                {deck.cards.length > 0 ? (
                    <TouchableOpacity
                        onPress={() => this.startQuiz(deck.id)}
                    >
                        <Text>Start a Quiz</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        decks: decks
    };
}

export default connect(mapStateToProps)(DeckView);