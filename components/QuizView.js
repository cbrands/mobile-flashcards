import React, { Component } from "react";
import {  Dimensions, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "./Card";
import { connect } from "react-redux";
import { clearLocalNotification, setLocalNotification } from "../utils/notification";
import { purple, white } from '../utils/colors';

class QuizView extends Component {
    state = {
        index: 0,
        score: 0
    };

    handleAnswer = correct => {
        const deckId = this.props.navigation.state.params.deckId;
        const cards = this.props.state.decks[deckId].cards;
        let { score, index } = this.state;

        if(correct) {
            score ++;
        }
        index++;
        this.setState({ index, score });
        if (index === cards.length) {
            clearLocalNotification().then(setLocalNotification);
        }
    };

    goBack = () => {
        this.props.navigation.goBack();
    };

    restart = () => {
        this.setState({ index: 0, score: 0 });
    };

    render() {
        const deckId = this.props.navigation.state.params.deckId;
        const cards = this.props.state.decks[deckId].cards;
        const { index, score } = this.state;
        if (index === cards.length) {
            return (
                <View style={styles.quizView}>
                    <Text style={styles.text}>
                        Result:{score} out of {cards.length} = {Math.floor(score / cards.length * 100)}%
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={this.restart} >
                        <Text style={styles.buttonText}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.goBack} >
                        <Text style={styles.buttonText}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return (
            <View style={styles.quizView}>
                <Text style={styles.numberText}>
                    {index + 1} / {cards.length}
                </Text>
                <Card card={cards[index]} handleAnswer={this.handleAnswer} />
            </View>
        );
    }
}

const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
    quizView: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white,
        height: dimensions.height
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    numberText: {
        fontSize: 20,
        justifyContent: 'flex-start',
        textAlign: 'left',
        marginTop: 40,
        height: 40
    },
    button: {
        backgroundColor: purple,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    buttonText: {
        fontSize: 25,
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        color: white
    }
});

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps)(QuizView);
