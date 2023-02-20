/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
    "Require cycle", 
    "VirtualizedLists should never be nested",
    "Animated: `useNativeDriver`",
    "Each child in a list should have a unique",
    "Require cycle: ",
    "Encountered two children with the same key"
]);

AppRegistry.registerComponent(appName, () => App);
