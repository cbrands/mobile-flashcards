import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import MainNavigator from './components/MainNavigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MyStatusBar />
          <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

