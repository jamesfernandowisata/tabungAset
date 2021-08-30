import React from 'react';
import {StyleSheet,View,Text} from 'react-native'
export function HeaderDetailNavigation(props){
    if(props.currentPosition==="1"){
        console.log(props)
        return(
            <View style={styles.subNavigate}>
                <Text style={{color:props.colorPick,fontWeight:"bold",fontSize:20}}>Header</Text>
                <Text style={styles.subNavigateText}>detail</Text>
            </View>)
    }else{
        return(
            <View style={styles.subNavigate}>
                <Text style={styles.subNavigateText}>Header</Text>
                <Text style={{color:props.colorPick,fontWeight:"bold",fontSize:20}}>detail</Text>
            </View>)
    }
    
}

const styles =StyleSheet.create({
    subNavigateText:{
        fontSize:20,
        fontWeight:"100",
    }, subNavigate:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingBottom:"5%",
        paddingLeft:"30%",
        paddingRight:"30%",
        paddingTop:"20%"
    },

})