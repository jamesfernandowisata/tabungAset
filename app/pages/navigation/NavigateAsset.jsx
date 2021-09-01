import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import {EmoteButton} from'../../container/component/EmoteButton'
const NavigationAsset = (props)=>{

    return(
        <View style={styles.container}>
            {console.log(props)}
            <View style={styles.header}>
                <Text style={{fontSize:30, justifyContent: 'center',fontWeight:'bold'}}>Asset</Text>
            </View>
            <View style ={styles.buttonContainer}>
            <TouchableOpacity emotes={faShoppingBasket} style ={styles.textContainer} onPress={()=>props.navigation.navigate("viewAsset")} colorPick="#d90053" emotes={faShoppingBasket} routeSend={props.navigation} textHeader="Your Assets">
                <EmoteButton emotes={faShoppingBasket} colorPick="#d90053" wheretogo="viewAsset" routeSend={props.navigation} textHeader=""/>
                    <Text>View</Text>
                </TouchableOpacity> 
                <TouchableOpacity style ={styles.textContainer} onPress={()=>props.navigation.navigate("regisAsset")} colorPick="#00b1d9" emotes={faPlusSquare} routeSend={props.navigation} textHeader="Registering Assets">
                    <EmoteButton emotes={faPlusSquare} colorPick="#00b1d9" wheretogo="regisAsset" routeSend={props.navigation} textHeader=""/>
                    <Text>Add</Text>
                </TouchableOpacity>              
                </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container: {
        flex:1,
        marginTop:'10%',

    }, header:{
        top:'2%',
        //backgroundColor:"blue",
        height:"10%",
        alignItems: 'center',
    }, 
    buttonContainer:{
        //flexDirection:"row",
        //justifyContent:"space-evenly",

        fontFamily: 'sans-serif-condensed',
        fontWeight:"bold",
        //backgroundColor:"red",
        
        padding:"20%",
        
    },textContainer:{
        alignItems: 'center',
        padding:"20%",
        elevation:8,
        width:"100%",
        backgroundColor:"white",
        marginBottom:"5%",
        borderRadius:10
    },
    buttonapp:{
        padding:"2%",
        width:"25%",
        height:"25%",
    },
})
export default NavigationAsset;