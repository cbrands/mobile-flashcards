import { StackNavigator } from 'react-navigation'
import React from 'react';
import DeckListView from './DeckListView';
import DeckView from './DeckView';
import AddCardView from './AddCardView';
import QuizView from './QuizView';
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
    },
    AddCard: {
        screen: AddCardView,
        navigationOptions: {
            title: "Add Card"
        }
    },
    Quiz: {
        screen: QuizView,
        navigationOptions: {
            title: "Quiz"
        }
    }
});

export default MainStackNavigator
