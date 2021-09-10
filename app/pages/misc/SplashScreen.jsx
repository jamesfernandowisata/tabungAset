import React,{useEffect} from 'react';
import {Text, StyleSheet,View,Image} from "react-native";
import { faChessRook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const SplashScreen = (props)=>{


useEffect(()=>{
    setTimeout(()=>{
        props.navigation.navigate("loginPage")
    },5000)
},[])


return(
<View style ={styles.container}>
        <Image
            source={require('../../../assets/reactNative.png')}
            style={styles.imageContainer}
            />
        <Text style={styles.textContainer}>Loading</Text>
</View>

)

}
const styles =StyleSheet.create({
    container: {
        //backgroundColor:'black',
        justifyContent: 'center',
        //position:"absolute",
        alignItems: 'center',
        top:'40%',
        //left:'40%',
    },
    textContainer: {
        color:'black'
    },
    imageContainer:{
        width:130,
        height:130
    }
})
export default SplashScreen