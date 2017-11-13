import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

export class DeckView extends Component {
    render() {
        const decks = Object.values(this.props.decks);
        const id = this.props.navigation.state.params.id;
        const deck = decks.filter(myDeck => myDeck.id === id)[0];
        const name = this.props.name;
        console.log('AAAAAAAAAAAAAAAAAAAAAAAA');
        console.log('mydeck', deck);
        return (
            <View>
                <Text>Meh</Text>
                <Text>{deck.title}</Text>
                <Text>{deck.cards.length} {deck.cards.length === 1 ? "Card" : "Cards"}</Text>
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