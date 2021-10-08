import React from 'react'
import { StyleSheet, Text, View,FlatList, Platform,} from 'react-native'
import { HeaderButtons } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

import Colors from '../constants/Colors'
import PlaceItem from '../components/PlaceItem'

const PlaceListScreen = props => {
    const places = useSelector(state => state.places.places)
    return (
       <FlatList data={places} 
       keyExtractor={item=>item.id}
       renderItem={itemData => <PlaceItem 
       image={itemData.item.imageUri} 
       title={itemData.item.title}
       address={null}
       onSelect={()=>{
           props.navigation.navigate('placeDetail',{
           placeTitle:itemData.item.title,
           placeId:itemData.item.id
           })
       }}
       /> }/>
    )
}

PlaceListScreen.navigationOptions = navData => ({
        headerTitle: 'All Places',
        headerRight:() => <HeaderButtons IconComponent={Ionicons}>
            <Ionicons name={Platform.OS === 'android' ? 'md-add' : 'ios-add'} 
            color={Platform.OS === 'android' ? 'white' : Colors.primary} 
            size={23}
            onPress={()=>{navData.navigation.navigate('newPlace')}}/>
        </HeaderButtons>
})

export default PlaceListScreen

const styles = StyleSheet.create({
   
})
