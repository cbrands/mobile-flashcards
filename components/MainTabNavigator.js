import { TabNavigator } from 'react-navigation'
import React from 'react';
import DeckListView from './DeckListView';
import AddDeckView from './AddDeckView';
import { lightPurp, white, lavender, gray } from '../utils/colors';

const MainTabNavigator = TabNavigator({
    DeckList: {
        screen: DeckListView,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        },
    },
    AddDeck: {
        screen: AddDeckView,
        navigationOptions: {
            tabBarLabel: 'NEW DECK'
        },
    },
    }, {
    animationEnabled: true,
    tabBarOptions: {
        activeBackgroundColor: lightPurp,
        inactiveBackgroundColor: lavender,
        activeTintColor: white,
        inactiveTintColor: gray,
        labelStyle: {
            fontSize: 12,
        },
    }
});

export default MainTabNavigator
