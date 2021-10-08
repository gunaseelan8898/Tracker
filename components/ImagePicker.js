import React,{useState} from 'react'
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Colors } from 'react-native/Libraries/NewAppScreen'



const ImgPicker = props => {
    const[pickedImage,setPickedImage]=useState();

    const verifyPermissions = async () =>{
        const result = await Permissions.askAsync(Permissions.CAMERA)
        if(result.status !== 'granted'){
            Alert.alert('Insufficient Permisions!','you need to grant Camera permission',[{text:'okay'}])
            return false;
        }
        return true
    }

    const takeImageHandler = async () =>{
     const hasPermission = await verifyPermissions();
     if(!hasPermission) {
         return;
     }
     const image = await ImagePicker.launchCameraAsync({
          allowsEditing:true,
          aspect:[16,9],
          quality:0.5
        });
        
        setPickedImage(image.uri);
        props.onImageTaken(image.uri);

}
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? (
                <Text>no image where picked</Text> ) : (
                <Image style={styles.image} source={{ uri:pickedImage }}/>  )}
                </View>
            <Button title="Take Image" color={Colors.primary} onPress={takeImageHandler}/>    
        </View>
    )
}

export default ImgPicker

const styles = StyleSheet.create({
    imagePicker:{
        alignItems:'center'
    },
    imagePreview:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ccc',
        borderWidth:1
    },
    image:{
        width:'100%',
        height:'100%'
    }
})
