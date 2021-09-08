import React,{useState,useEffect} from 'react';
import {Center, NativeBaseProvider} from 'native-base'
import {View, StyleSheet,Text} from 'react-native'
import {EmoteButton} from "../component/EmoteButton"
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
export function Header(props){
    //console.log("ini loading data 2 :",props)
    return(
        <View style={styles.headerNode}>    
        <View style={styles.emoteHeader}>
            <EmoteButton emotes={props.emotes} wheretogo={props.wheretogo} colorPick={props.colorPick} routeSend={props.routeSend} token={props.token}/>
        </View>
        <View style={styles.subHead}>
            <Text style={styles.subHeadtext}>{props.textHeader}</Text>  
        </View>  
        </View>
    )
}
const styles =StyleSheet.create({
    headerNode:{
        justifyContent:"center",
        alignItems: "center"
    },
    emoteHeader:{
        paddingBottom:"2%",
        paddingTop:"7%",
    },
    subHead:{
        justifyContent:"center",
        marginTop:"1%"
    },
    subHeadtext:{
        fontWeight:"bold",
    },
})