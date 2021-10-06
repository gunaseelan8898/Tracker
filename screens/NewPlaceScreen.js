import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,Button,TextInput } from 'react-native'
import { useDispatch } from 'react-redux'

import Colors from '../constants/Colors'
import * as placesActions from '../store/places-actions'

const NewPlaceScreen = () => {
    const[titleValue,setTitlevalue] = useState('')

    const dispatch = useDispatch();

    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.textInput} 
            value={titleValue} 
            onChangeText={text => setTitlevalue(text)} />
            <Button title="Save Places" color={Colors.primary} 
            onPress={()=>{
                dispatch(placesActions.addPlace(titleValue)
                )
            }}/>
        </View>
        </ScrollView>
    )
}

export default NewPlaceScreen

const styles = StyleSheet.create({
    form:{
        margin:30
    },
    label:{
        fontSize:18,
        marginBottom:15
    },
    textInput:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        marginBottom:15,
        paddingVertical:4,
        paddingHorizontal:4
    }
})
