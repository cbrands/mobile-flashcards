import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyStatusBar from './components/MyStatusBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MyStatusBar />
          <Ionicons name='ios-pizza' color='red'/>
        <Text>Meh3. Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
    app: {
        flex: 1
    }
});
