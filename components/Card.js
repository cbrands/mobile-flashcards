import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { purple, white, red } from '../utils/colors';

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
                <View style={styles.card}>
                    <Text style={styles.text}>{this.props.card.answer}</Text>
                    <TouchableOpacity style={styles.redButton} onPress={this.flipCard}>
                        <Text style={styles.redButtonText}>Question</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.flipCard();
                            this.props.handleAnswer(true);
                        }}
                    >
                        <Text style={styles.buttonText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.flipCard();
                            this.props.handleAnswer(false);
                        }}
                    >
                        <Text style={styles.buttonText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return (
            <View style={styles.card}>
                <Text style={styles.text}>{this.props.card.question}</Text>
                <TouchableOpacity style={styles.redButton} onPress={this.flipCard}>
                    <Text style={styles.redButtonText}>Answer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        //flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: white
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: purple,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    redButton: {
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
    },
    redButtonText: {
        fontSize: 25,
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        color: red
    }
});

export default Card;