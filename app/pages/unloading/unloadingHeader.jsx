import React,{useState} from 'react';
import {Text, StyleSheet,View,TouchableOpacity} from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Header} from "../../container/component/Header"
import {NativeBaseProvider } from "native-base"
import { RenderView } from '../../container/util/RenderView';
import {HeaderDetailNavigation} from '../../container/component/HeaderDetailNavigation'

const unloadingHeader=(props)=>{
    const [documentNo,setDocumentNo] =useState('');
    const [documentType,setDocumentType]=useState('');
    const [documentDate,setDocumentDate]=useState('');
    const [createBy, setCreateBy]=useState('');
    const [documentStatus,setDocumentStatus]=useState('');
    //console.log("ini unloading data :",props)
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View styles={styles.emoteContainer}>
                        <Header emotes={faBoxOpen} colorPick="#de6600" wheretogo="home" routeSend={props.navigation} textHeader="Unloading Item"/>
                    
                    </View>
                    <View styles={styles.subNavContainer}>
                        <HeaderDetailNavigation routeSend={props.navigation} colorPick="#de6600" currentPosition="1"/>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View>
                        <Text>UnDrafted</Text>
                            <RenderView/>
                        <Text>On Going</Text>
                            <RenderView/>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("unloadAddH")}
                    style={styles.touchButton}>
                    <FontAwesomeIcon icon={faPlus} size={36} color={"#eeeeee"}/>
                </TouchableOpacity>
            </View>
            
        </NativeBaseProvider>
    )

}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:"10%",
    },
    headerContainer:{
        flexDirection:"column",
        height:"19%",
    },
    emoteContainer:{            
    },
    subNavContainer:{
        
    },
    bodyContainer:{
    },
    touchButton:{
        position: "absolute",
        zIndex: 9,
        right: "7%",
        bottom:"10%",
        backgroundColor: "#de6600",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8,
    },
})

export default unloadingHeader;
