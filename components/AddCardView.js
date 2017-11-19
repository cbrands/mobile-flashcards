import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { storeCard } from "../utils/api";
import { purple, white, black} from '../utils/colors';
import { makeId } from '../utils/helper';

export class AddDeckView extends Component {
    state = {
        question: '',
        answer: ''
    };

    onSubmit = () => {
        const deckId = this.props.navigation.state.params.deckId;
        const question = this.state.question;
        const answer = this.state.answer;
        this.setState({ question: "" });
        this.setState({ answer: "" });
        const id = makeId();
        const newCard = {
            id,
            question,
            answer
        }
        this.props.dispatch(addCard(deckId, newCard));
        storeCard(deckId, newCard);
        this.props.navigation.goBack();
    };


    render() {
        return (
            <View style={styles.addCardView}>
                <Text style={styles.text}>Add question.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <Text style={styles.text}>Add answer.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addCardView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: white
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 30
    },
    input: {
        fontSize: 24,
        height: 48,
        alignSelf: 'stretch',
        marginTop: 30,
        marginLeft: 40,
        marginRight: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 3,
        borderColor: black
    },
    button: {
        backgroundColor: purple,
        marginTop: 40,
        width: 100
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        color: white
    }
});
export default connect()(AddDeckView);