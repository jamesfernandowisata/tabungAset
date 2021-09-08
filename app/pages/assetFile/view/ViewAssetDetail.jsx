import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView} from 'react-native'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Header} from "../../../container/component/Header"
import {HeaderDetailNavigation} from "../../../container/component/HeaderDetailNavigation"
const ViewAssetDetail=(props)=>{
    console.log(props)
    const [nama,setNama]=useState(props.navigation.getParam("name"))
    const [value,setValue] =useState(props.navigation.getParam("value"))
    const [description,setDescription] = useState(props.navigation.getParam("description"))
    const [cUOMId,setCUOMId]=useState(props.navigation.getParam("c_uom_id"))
    return(
        <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.emoteContainer}>
                        <Header emotes={faShoppingBasket} colorPick="#d90053" wheretogo="viewAsset" routeSend={props.navigation} textHeader="looking deep"/>
                    </View>
                    <View style={styles.subNavContainer}>
                        <HeaderDetailNavigation routeSend={props.navigation} colorPick="#d90053" currentPosition="1" text1="Assets" text2={cUOMId} wheretogo="viewAS"/>
                    </View>
                </View>
                <View style={styles.inputHeader}>
                <ScrollView>
                    <View style={styles.TextContainer}>
                        <Text>Name</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{nama}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Code</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{value}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Created Date</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{description}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Manifacturer</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{nama}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Category</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{value}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Valve Type</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{description}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Stamp Tare Weight</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{value}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Capacity</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{nama}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Valve Type</Text>
                        <Text style={{fontSize:25, paddingLeft:'2%'}}>{value}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Test Pressure</Text>
                        <Text style={{fontSize:25, paddingLeft:'3%'}}>{nama}</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text>Working Pressure</Text>
                        <Text style={{fontSize:25, paddingLeft:'3%'}}>{description}</Text>
                    </View>
                </ScrollView>
                </View>
            </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:"10%"
    },
    headerContainer:{
        flexDirection:"column",
        height:"29%",
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
        color:"#98D6EA",
        fontWeight:"bold",
        fontSize:20
    },
    nextButtonStyle:{
        backgroundColor:"#98D6EA",
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
    TextContainer:{
        marginBottom:'2%',
        borderBottomColor: '#d90053',
        borderBottomWidth: 2,
    }

})

export default ViewAssetDetail;