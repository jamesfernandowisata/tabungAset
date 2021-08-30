import React,{useState} from 'react';
import {Text, StyleSheet,View, TouchableOpacity} from "react-native"
import { Center,Button, ButtonGroup,NativeBaseProvider,Heading } from "native-base"
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faVial } from '@fortawesome/free-solid-svg-icons'
import {Header} from'../../container/component/Header'

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
                <View>
                    <Header emotes={faTruckLoading} colorPick="#003f5a" wheretogo="loadHead" routeSend={props.navigation} textHeader="Loading"/>
                </View>
                <View>
                    <Header emotes={faBoxOpen} colorPick="#de6600" wheretogo="unloadHead" routeSend={props.navigation} textHeader="UnLoading"/>
                </View> 
                <View>
                    <Header emotes={faTruck} colorPick="#007a7a" wheretogo="delifHead"  routeSend={props.navigation} textHeader="Deliver"/>  
                </View>             
                </View>
                <View style={styles.footerContainer}>
                    <Header emotes={faVial} colorPick="#FFFFFF" wheretogo="delifHead"  routeSend={props.navigation} textHeader=""/>  
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
    footerContainer:{
        position: "absolute",
        zIndex: 9,
        right: "40%",
        bottom:"20%",
        backgroundColor: "#915e91",
        width: 80,
        height: 78,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
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