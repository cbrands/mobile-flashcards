import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "./Card";
import { connect } from "react-redux";

class QuizView extends Component {
    state = {
        index: 0,
        score: 0,
        done: false
    };

    handleAnswer = correct => {
        const deckId = this.props.navigation.state.params.deckId;
        const cards = this.props.decks[deckId].cards;
        let { score, index, done } = this.state;

        if(correct) {
            score ++;
        }
        index++;
        if (index === cards.length) {
            done = true;
        }
        this.setState({ index, score, done });
    };

    render() {
        console.log("props", this.props);
        const deckId = this.props.navigation.state.params.deckId;
        const cards = this.props.decks[deckId].cards;
        const navigation = this.props.navigation;
        const { index, score, done } = this.state;
        if (done) {
            return (
                <View>
                    <Text>
                        Result:{score} out of {cards.length} = {Math.floor(score / cards.length * 100)}%
                    </Text>
                    <TouchableOpacity onPress={this.setState({ index: 0, score: 0, done: false })} >
                        <Text>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigation.goBack()} >
                        <Text>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return (
            <View>
                <Text>
                    {index} / {cards.length}
                </Text>
                <Card card={cards[index]} handleAnswer={this.handleAnswer} />
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        decks: decks
    };
}

export default connect(mapStateToProps)(QuizView);
