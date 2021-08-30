import React,{useState,useEffect} from 'react';
import {Center, NativeBaseProvider} from 'native-base'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { useNavigation } from '@react-navigation/native';

export function EmoteButton(props){
// const navigation = useNavigation()
const address=props.wheretogo2
//console.log("ini loading data 3:",props)
//console.log(address)
return(
            <TouchableOpacity onPress={()=>props.routeSend.navigate(address)}>
                <FontAwesomeIcon icon={props.emotes} size={64} color={props.colorPick}/>
            </TouchableOpacity>
        )
    
}