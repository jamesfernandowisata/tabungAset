import React from 'react';
import {Text, StyleSheet,View,TouchableOpacity} from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTruck} from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {Header} from "../../container/component/Header"
import {NativeBaseProvider } from "native-base"
import { RenderView } from '../../container/util/RenderView';
import {HeaderDetailNavigation} from '../../container/component/HeaderDetailNavigation'

const deliveryHeader=(props)=>{
    const [showDraft,setShowDraft] =useState(false);
    const [showOnGoing,setShowOnGoing] =useState(false);
    const [showHidden,setShowHidden]=useState(true);
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View styles={styles.emoteContainer}>
                        <Header emotes={faTruck} colorPick="#007a7a" wheretogo="home" routeSend={props.navigation} textHeader="Delivering Item"/>
                    
                    </View>
                    <View styles={styles.subNavContainer}>
                        <HeaderDetailNavigation routeSend={props.navigation} colorPick="#007a7a" currentPosition="1"/>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.subBodyContainer}>
                    <View style={styles.subsubBodyContainer}>
                        <Text style={{fontWeight: 'bold', fontSize:18}}>Drafted</Text>
                        <TouchableOpacity onPress={()=>setShowDraft(!showDraft)}>
                            <FontAwesomeIcon icon={showHidden?(faChevronDown):(faChevronUp)} size={20} color="#007a7a"/>
                        </TouchableOpacity>
                    </View>
                        {
                            showDraft ? (
                                <RenderView infoData="1" infowhat="products"/>
                                ):null
                        }
                    </View>
                    <View style={styles.subBodyContainer}>
                    <View style={styles.subsubBodyContainer}>
                        <Text style={{fontWeight: 'bold', fontSize:18}}>On Going</Text>
                        <TouchableOpacity onPress={()=>setShowOnGoing(!showOnGoing)}>
                            <FontAwesomeIcon icon={showHidden?(faChevronDown):(faChevronUp)} size={20} color="#007a7a"/>
                        </TouchableOpacity>
                    </View>
                        {
                            showOnGoing ? (
                                <RenderView infoData="2" infowhat="products"/>
                                ):null
                        }
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("delifAddH")}
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
    subBodyContainer:{
        paddingBottom:"3%",
    },
    subsubBodyContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    headerContainer:{
        flexDirection:"column",
        height:"29%",
       // backgroundColor:"red"
    },
    emoteContainer:{      
        //backgroundColor: "",      
    },
    subNavContainer:{
        backgroundColor: "yellow"
    },
    bodyContainer:{
        //backgroundColor: ""
        paddingTop:"1%",
        paddingLeft:"5%",
        paddingRight:"5%"
    },
    touchButton:{
        position: "absolute",
        zIndex: 9,
        right: "7%",
        bottom:"10%",
        backgroundColor: "#003f5a",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8,
    },
})

export default deliveryHeader;
