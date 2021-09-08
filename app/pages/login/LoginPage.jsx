import React,{useState,useEffect} from 'react';
import {Text, StyleSheet,View, TouchableOpacity,TextInput} from "react-native"
import { Center,Button, ButtonGroup,NativeBaseProvider,Heading } from "native-base"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Axios from "axios";

const LoginPage = (props)=>{

const [username, setInputUsername] = useState("");
const [password, setInputPassword] = useState("");
const [token,setToken] =useState("");

useEffect(()=>{
   // console.log(token)
},[token])

const loginUser = () => {
const auth = JSON.stringify({
    value: username,
    password: password
    });

    Axios.post("http://192.168.88.152:5000/api/v1/auth/login", auth, {
    headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        console.log("checking response", response);
        if (response.status === 200) {
            setToken(response.data.token)
            props.navigation.navigate("home",{pass:response.data.token , user:username});
        } else {
        }
    })
    .catch(error => {
        console.log(JSON.stringify(error));
    });
}

return(
<View style ={styles.container}>
    <View style ={styles.header}>
        <Text style ={styles.headerText}>Login</Text>
    </View>                
    <View style ={styles.buttonContainer}>
        <View style={styles.usernameForm}>
            <FontAwesomeIcon icon={faUser} style={styles.iconUser} />
            <TextInput
                style={styles.TextInput}
                value={username}
                onChangeText={value => setInputUsername(value)}
                autoCapitalize="none"
            ></TextInput>
        </View>
        <View style={styles.passwordForm}>
            <FontAwesomeIcon icon={faKey} style={styles.iconUser} />
            <TextInput
                style={styles.TextInput}
                value={password}
                onChangeText={value => setInputPassword(value)}
                autoCapitalize="none"
                secureTextEntry={true}
            ></TextInput>
        </View>
    </View>
    <View style={styles.footerContainer}>
        <TouchableOpacity
            onPress={loginUser}
            style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
    // onPress={() => navigation.navigate("register")}
            style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>Register now</Text>
        </TouchableOpacity>    
    </View> 
</View>

)

}
const styles =StyleSheet.create({
    container: {
        flex:1,
        marginTop:'10%',
        position:"absolute",
        alignItems: 'center'
    },
    textContainer:{
        alignItems: 'center'
    },
    footerContainer:{
        width:"100%"
    },
    headerText:{
        fontSize:30
    },
    header:{
        top:'2%',
        height:"37%",
        
    },
    buttonContainer:{
        height:"80%",
        fontFamily: 'sans-serif-condensed',
        fontWeight:"bold",
        paddingHorizontal:"5%",
        paddingVertical:"10%",
        //backgroundColor:"red"
    },
    buttonapp:{
        padding:"4%",
        width:"50%",
        height:"25%",
    },
    usernameForm: {
        borderWidth: 3,
        marginHorizontal: 15,
        borderRadius: 15,
        height: "27%",
        padding:"2%",
        flexDirection:"row",
        alignItems: "center",
        alignContent: "center",
        marginVertical:"4%"
    },
    passwordForm: {
        borderWidth: 3,
        marginHorizontal: 15,
        borderRadius: 15,
        height: "27%",
        padding:"2%",
        flexDirection:"row",
        alignItems: "center",
        alignContent: "center"

    },
    TextInput: {
        fontSize: 20,
        marginHorizontal: 5,
        alignContent: "center",
        width:"92%"
    },
    loginButtonContainer: {
        position: "relative",
        alignItems: "center",
        top: "10%",
        backgroundColor: "#000000",
        color: "white",
        marginHorizontal: 100,
        borderRadius: 5,
        padding:12
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
    registerButtonContainer: {
        position: "relative",
        alignItems: "center",
        top: "15%"
    },
    registerText: {
    color: "#A7ADBA"
    },
})
export default LoginPage