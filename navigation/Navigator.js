import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { Platform } from 'react-native';

import Colors from '../constants/Colors';
import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

const Navigator = createStackNavigator({
    placeList:PlaceListScreen,
    placeDetail:PlaceDetailScreen,
    newPlace:NewPlaceScreen,
    map:MapScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primary
    }
})


export default createAppContainer(Navigator);