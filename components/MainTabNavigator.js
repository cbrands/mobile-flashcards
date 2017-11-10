import { StackNavigator } from 'react-navigation'
import React from 'react';

import { Icon } from 'react-native-elements';

import DeckListView from './DeckListView';
import AddDeckView from './AddDeckView';

const MainNavigator = StackNavigator({
    DeckList: {
        screen: DeckListView,
        navigationOptions: {
            header: null,
        },
    },
    AddDeck: {
        screen: AddDeckView,
        navigationOptions: {
            header: null
        },
    }
});

export default MainNavigator
