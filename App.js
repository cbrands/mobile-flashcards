import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import MyStatusBar from './components/MyStatusBar';
import MainStackNavigator from './components/MainStackNavigator'
import reducer from "./reducers";
import { retrieveDecks } from './utils/api'
import { receiveDecks } from './actions'
import { setLocalNotification } from "./utils/notification";

const store = createStore(reducer);
store.subscribe(() => console.log('store', store.getState()));
retrieveDecks().then(data => store.dispatch(receiveDecks(JSON.parse(data))));

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MyStatusBar />
                    <MainStackNavigator />
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

