import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { storeDeck } from "../utils/api";
import { purple, white, black} from '../utils/colors';
import { makeId } from '../utils/helper';

export class AddDeckView extends Component {
    state = { title: '' };

    onSubmit = () => {
        Keyboard.dismiss();
        const title = this.state.title;
        this.setState({ title: "" });
        const id = makeId();
        this.props.dispatch(addDeck(id, title));
        storeDeck(id, title);
        this.props.navigation.navigate("Deck", { id });
    };


    render() {
        return (
            <View style={styles.addDeckView}>
                <Text style={styles.text}>Name your new Deck.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addDeckView: {
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