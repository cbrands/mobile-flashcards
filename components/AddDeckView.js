import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import { purple} from '../utils/colors';

export class AddDeckView extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <Text>This is the AddDeck view</Text>
                {/*<TouchableOpacity  onPress={() => navigation.navigate('DeckList')}>*/}
                    {/*<Text>Cancel</Text>*/}
                {/*</TouchableOpacity>*/}
                <Button
                    onPress={() => navigation.goBack()}
                    color={purple}
                    title="cancel"
                />
            </View>
        )
    }
}
export default AddDeckView;