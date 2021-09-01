import React from 'react';
import {View,Text, StyleSheet} from 'react-native'
import {Header} from "../../../container/component/Header"
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
const ViewAsset=(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                    <View styles={styles.emoteContainer}>
                        <Header emotes={faShoppingBasket} colorPick="#d90053" wheretogo="assetNav" routeSend={props.navigation} textHeader="Nice Assets"/>
                    </View>
                    {/* <View styles={styles.subNavContainer}>
                        <HeaderDetailNavigation routeSend={props.navigation} colorPick="#d90053" currentPosition="1"/>
                    </View> */}
            </View>
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
    headerContainer:{
        flexDirection:"column",
        height:"29%",
       // backgroundColor:"red"
    },
})

export default ViewAsset;