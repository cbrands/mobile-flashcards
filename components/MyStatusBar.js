import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { purple} from '../utils/colors';

const styles = StyleSheet.create({
    myStatusBar: {
        backgroundColor: purple,
        height: Constants.statusBarHeight
    }
})

export default function MyStatusBar() {
    return (
        <View style={styles.myStatusBar}>
            <StatusBar translucent style={styles.myStatusBar} barStyle='light-content' />
        </View>
    )
}