import React,{useState,useEffect} from 'react';
import {Center, NativeBaseProvider} from 'native-base'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { useNavigation } from '@react-navigation/native';

export function EmoteButton(props){
// const navigation = useNavigation()
const address=props.wheretogo
const token=props.token
const user=props.user
//console.log("ini loading data 3:",props)
return(
            <TouchableOpacity 
            onPress={()=>props.routeSend.navigate(address,{token:token,user:user})}
            >
                <FontAwesomeIcon icon={props.emotes} size={64} color={props.colorPick}/>
            </TouchableOpacity>
        )
    
}