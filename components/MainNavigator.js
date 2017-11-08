import { StackNavigator } from 'react-navigation'

import DeckListView from './DeckListView';

const MainNavigator = StackNavigator({
    DeckList: {
        screen: DeckListView,
        navigationOptions: {
            header: null,
        },
    }
});

export default MainNavigator