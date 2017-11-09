import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import MyStatusBar from './components/MyStatusBar';
import MainNavigator from './components/MainNavigator'
import reducer from "./reducers";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <MyStatusBar />
                <MainNavigator />
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

