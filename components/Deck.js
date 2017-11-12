import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Deck extends Component {
    render() {
        const name = this.props.name;
        return (
            <View>
                <Text>
                    {name}
                </Text>
            </View>
        );
    }
}

export default Deck