import { StackNavigator } from 'react-navigation'

import DeckListView from './DeckListView';

const MainNavigator = StackNavigator({
    DeckList: {
        screen: DeckListView
    }
});

export default MainNavigator