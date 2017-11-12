import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { storeDeck } from "../utils/api";
import { purple} from '../utils/colors';

export class AddDeckView extends Component {
    state = { title: '' };

    onSubmit = () => {
        const title = this.state.title;
        this.setState({ title: "" });
        this.props.dispatch(addDeck(title));
        //storeDeck(title);
        this.props.navigation.goBack();
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Name your new Deck.</Text>
                <TextInput
                    style={{ borderColor: '#000', borderWidth: 1}}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
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