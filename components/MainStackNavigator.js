import { StackNavigator } from 'react-navigation'
import React from 'react';
import DeckView from './DeckView';
import AddCardView from './AddCardView';
import QuizView from './QuizView';
import MainTabNavigator from './MainTabNavigator';
import { lightPurp, white } from '../utils/colors';


const MainStackNavigator = StackNavigator({
    Home: {
        screen: MainTabNavigator,
        navigationOptions: {
            header: null
        }
    },
    Deck: {
        screen: DeckView,
        navigationOptions: {
            title: "Deck",
            headerTintColor: white,
            headerStyle: {
                backgroundColor: lightPurp
            }
        }
    },
    AddCard: {
        screen: AddCardView,
        navigationOptions: {
            title: "Add Card",
            headerTintColor: white,
            headerStyle: {
                backgroundColor: lightPurp
            }
        }
    },
    Quiz: {
        screen: QuizView,
        navigationOptions: {
            title: "Quiz",
            headerTintColor: white,
            headerStyle: {
                backgroundColor: lightPurp
            }
        }
    }
});

export default MainStackNavigator
