import React,{useState,useEffect} from 'react';
import {Center, NativeBaseProvider} from 'native-base'
import {View, StyleSheet,Text} from 'react-native'
import {EmoteButton} from "../component/EmoteButton"
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
export function Header(props){
    //console.log("ini header data :",props)
    return(
        <NativeBaseProvider>
        <Center>
        <View style={styles.emoteHeader}>
            <EmoteButton emotes={props.emotes} wheretogo={props.wheretogo} colorPick={props.colorPick} routeSend={props.routeSend}/>
        </View>
        <View style={styles.subHead}>
            <Text style={styles.subHeadtext}>{props.textHeader}</Text>  
        </View>
        </Center>
        </NativeBaseProvider>
    )
}
const styles =StyleSheet.create({

    emoteHeader:{
        paddingBottom:"5%",
        marginTop:"2%",
       paddingTop:"8%",
    },
    subHead:{
        justifyContent:"center",
        paddingTop:"5%",
        marginTop:"7%"
    },
    subHeadtext:{
        fontWeight:"bold",
    },
})