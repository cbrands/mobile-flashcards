import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import _ from "lodash";
import { connect } from 'react-redux';
import Deck from './Deck';

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
                    data={Object.values(decks)}
                    renderItem={({ item: { questions, title } }) => {
                        console.log('title', title);
                        return (
                            <Text key={title}>{title}</Text>
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
