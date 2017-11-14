import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { storeDeck } from "../utils/api";
import { purple} from '../utils/colors';

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
        this.props.dispatch(addCard(deckId, question, answer));
        //storeDeck(title);
        this.props.navigation.goBack();
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Add question.</Text>
                <TextInput
                    style={{ borderColor: '#000', borderWidth: 1}}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <Text>Add answer.</Text>
                <TextInput
                    style={{ borderColor: '#000', borderWidth: 1}}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <Button
                    onPress={() => this.onSubmit()}
                    color={purple}
                    title="Submit"
                />
            </View>
        )
    }
}
export default connect()(AddDeckView);