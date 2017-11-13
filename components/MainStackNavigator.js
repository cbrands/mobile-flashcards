import { StackNavigator } from 'react-navigation'
import React from 'react';
import DeckListView from './DeckListView';
import DeckView from './DeckView';
import MainTabNavigator from './MainTabNavigator';


const MainStackNavigator = StackNavigator({
    Home: {
        screen: MainTabNavigator,
        navigationOptions: {
            header: null
        }
    },
    DeckList: {
        screen: DeckListView
    },
    Deck: {
        screen: DeckView,
        navigationOptions: {
            title: "Deck"
        }
    }
});

export default MainStackNavigator
