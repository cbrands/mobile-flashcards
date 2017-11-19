import React, { Component } from "react";
import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { purple, white, red, lavender } from '../utils/colors';
import FlipCard from 'react-native-flip-card';

export class Card extends Component {

    render() {
        return (
            <FlipCard style={styles.card}>
                <View>
                    <Text style={styles.text}>{this.props.card.question}</Text>
                    <Text style={styles.redButtonText}>Click to show answer</Text>
                </View>
                <View style={styles.cardBack}>
                    <Text style={styles.text}>{this.props.card.answer}</Text>
                        <Text style={styles.redButtonText}>Click to show question</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.props.handleAnswer(true);}} >
                        <Text style={styles.buttonText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.props.handleAnswer(false); }} >
                        <Text style={styles.buttonText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </FlipCard>
        );
    }
}

const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        backgroundColor: white,
        borderWidth: 0,
    },
    cardBack: {
        backgroundColor: lavender,
        height: dimensions.height,
        width: dimensions.width
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: purple,
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