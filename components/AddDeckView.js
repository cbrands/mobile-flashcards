import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import { purple} from '../utils/colors';

export class AddDeckView extends Component {
    render() {
        const navigation = this.props.navigation;
        state = { title: '' };
        return (
            <View style={{ flex: 1 }}>

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