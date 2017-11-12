import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import MyStatusBar from './components/MyStatusBar';
import MainTabNavigator from './components/MainTabNavigator'
import reducer from "./reducers";
import { retrieveDecks } from './utils/api'
import { receiveDecks } from './actions'

const store = createStore(reducer);
store.subscribe(() => console.log('store', store.getState()));
//retrieveDecks().then(data => store.dispatch(receiveDecks(data)))

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <MyStatusBar />
                <MainTabNavigator />
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

