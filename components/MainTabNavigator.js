import { TabNavigator } from 'react-navigation'
import React from 'react';
import DeckListView from './DeckListView';
import AddDeckView from './AddDeckView';

const MainTabNavigator = TabNavigator({
    DeckList: {
        screen: DeckListView,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    },
    AddDeck: {
        screen: AddDeckView,
        navigationOptions: {
            tabBarLabel: 'NEW DECK'
        }
    }
});

export default MainTabNavigator
