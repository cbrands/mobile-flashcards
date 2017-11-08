import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export class DeckListView extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <Text>This is the DeckList view</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('AddDeck')}>
                    <Text>Add Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default DeckListView;