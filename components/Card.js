import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export class Card extends Component {
    state = {
        cardFlipped: false
    };

    flipCard = () => {
        this.setState({ cardFlipped: !this.state.cardFlipped });
    };

    render() {
        if (this.state.cardFlipped) {
            return (
                <View>
                    <Text>{this.props.card.answer}</Text>
                    <TouchableOpacity onPress={this.flipCard}>
                        <Text>Question</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.flipCard();
                            this.props.handleAnswer(true);
                        }}
                    >
                        <Text>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.flipCard();
                            this.props.handleAnswer(false);
                        }}
                    >
                        <Text>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return (
            <View>
                <Text>{this.props.card.question}</Text>
                <TouchableOpacity onPress={this.flipCard}>
                    <Text>Answer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Card;