import React,{useState} from 'react';
import {Text, StyleSheet,View, TouchableOpacity} from "react-native"
import { Center,Button, ButtonGroup,NativeBaseProvider,Heading } from "native-base"
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faVial } from '@fortawesome/free-solid-svg-icons'
import {EmoteButton} from'../../container/component/EmoteButton'

const homepage =(props)=>{

   // console.log("navigation here ", props) //props ini ada variabel navigation, variable navigation didalem props ini lu passing sebagai parameter sampe ke EmoteButton.jsx

    const [sesuatu, setSesuatu] =useState("");
    return (
        
        <View style ={styles.container}>
            <NativeBaseProvider>
                <View style ={styles.header}>
                    <Center>
                        <Heading>Navigations</Heading>
                    </Center>
                </View>                
                <View style ={styles.buttonContainer}>
                <View style ={styles.textContainer}>
                    <EmoteButton emotes={faTruckLoading} colorPick="#58BDDD" wheretogo="loadHead" routeSend={props.navigation} textHeader=""/>
                    <Text>Loading</Text>
                </View>
                <View>
                    <EmoteButton emotes={faBoxOpen} colorPick="#FFA668" wheretogo="unloadHead" routeSend={props.navigation} textHeader=""/>
                    <Text>UnLoading</Text>
                </View> 
                <View>
                    <EmoteButton emotes={faTruck} colorPick="#5ECAAC" wheretogo="delifHead"  routeSend={props.navigation} textHeader=""/> 
                    <Text>Delivery</Text> 
                </View>             
                </View>
                <View style={styles.footerContainer}>
                    <EmoteButton emotes={faVial} colorPick="#7189BF" wheretogo="assetNav"  routeSend={props.navigation} textHeader=""/>  
                </View> 
        </NativeBaseProvider>
            
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex:1,
        marginTop:'10%',

    },
    textContainer:{
        alignItems: 'center'
    },
    footerContainer:{
        position: "absolute",
        zIndex: 9,
        right: "10%",
        bottom:"10%",
        backgroundColor: "#ffffff",
        width: 80,
        height: 78,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2
    },
    header:{
        top:'2%',
        //backgroundColor:"blue",
        height:"10%"
    },
    buttonContainer:{
        flexDirection:"row",
        height:"50%",
        justifyContent:"space-between",
        fontFamily: 'sans-serif-condensed',
        fontWeight:"bold",
        //backgroundColor:"red",
        width:"100%",
        padding:"9%",
        
    },
    buttonapp:{
        padding:"4%",
        width:"25%",
        height:"25%",
    },
    loadApp:{
        color:"blue"
    }
})
export default homepage;