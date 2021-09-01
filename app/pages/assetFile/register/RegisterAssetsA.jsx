import React,{useState} from 'react';
import {Text, StyleSheet,View,TouchableOpacity} from "react-native"
import { Center,Button, ButtonGroup,NativeBaseProvider,Heading } from "native-base"
import {FormInput} from '../../../container/util/FormInput'
import {Header} from '../../../container/component/Header'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import {HeaderDetailNavigation} from '../../../container/component/HeaderDetailNavigation'
const RegisterAssetsA=(props)=>{

    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View styles={styles.emoteContainer}>
                        <Header emotes={faPlusSquare} colorPick="#00b1d9" wheretogo="regisAsset" routeSend={props.navigation} textHeader="Need More Info"/>
                    </View>
                    <View styles={styles.subNavContainer}>
                        <HeaderDetailNavigation routeSend={props.navigation} colorPick="#00b1d9" currentPosition="1" text1="Register" text2="Assets"/>
                    </View>
                </View>
                <View style={styles.inputHeader}>
                    <FormInput formType="loading" colorPick="#00b1d9"/>
                </View>
            </View>
        </NativeBaseProvider>
    )

}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:"10%"
    },
    headerContainer:{
        flexDirection:"column",
        height:"19%",
    },
    inputHeader:{
        flex:1,
        paddingLeft:"7%",
        paddingRight:"7%"
    },
    textInputStyle:{
        height:40,
        fontWeight:"bold",
        marginBottom:"1%"
        
    },  
    subHead:{
        justifyContent:"center",
        padding:"3%"
    },
    subHeadtext:{
        fontWeight:"bold",
    },
    subNavigateMainText:{
        color:"#00b1d9",
        fontWeight:"bold",
        fontSize:20
    },
    nextButtonStyle:{
        backgroundColor:"#00b1d9",
        marginBottom:10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:20
    },
    nextButtonStyleText:{
        fontSize:30,
        justifyContent:"center",
        color:"#ffffff",
    },
    subNavigateText:{
        fontSize:20,
        fontWeight:"100",
    },
    subNavigate:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingBottom:"5%",
        paddingLeft:"30%",
        paddingRight:"30%",
    },
    touchButton:{
        position: "absolute",
        zIndex: 9,
        right: 20,
        bottom:20,
        backgroundColor: "#00b1d9",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8,
    }

})

export default RegisterAssetsA;
