import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


export class DeckListView extends Component {
    isEmpty = (obj) => {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }

    render() {
        console.log("this.props.decks = ", this.props.decks);
        if (this.props.decks === null || this.isEmpty(this.props.decks)) {
            return (
                <View>
                    <Text>You have not yet created any decks.</Text>
                    <Text>Use the "New Deck" tab to add a deck.</Text>
                </View>
            );
        }

        const navigation = this.props.navigation;
        console.log('navigation', navigation);
        const decks = Object.values(this.props.decks);
        // console.log('decksArray', decksArray);
        // const decks = Object.values(decksArray);
        console.log('decks', decks);
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={Object.values(this.props.decks)}
                    renderItem={({ item: { id, title, cards } }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Deck", { id })} >
                                <Text>{title}</Text>
                                <Text>{cards.length} {cards.length === 1 ? "Card" : "Cards"}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.title}
                />
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks: decks
    };
}

export default connect(mapStateToProps)(DeckListView);
