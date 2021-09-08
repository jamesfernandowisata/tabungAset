import React,{useEffect} from 'react';
import {Text, StyleSheet,View,Image} from "react-native";


const SplashScreen = (props)=>{


useEffect(()=>{
    setTimeout(()=>{
        props.navigation.navigate("loginPage")
    },5000)
},[])


return(
<View style ={styles.container}>
    <Text>something</Text>
</View>

)

}
const styles =StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        position:"absolute",
        alignItems: 'center'
    },
})
export default SplashScreen