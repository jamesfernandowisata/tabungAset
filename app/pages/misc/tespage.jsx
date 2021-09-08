import React,{useEffect} from 'react';
import {View,Text} from 'react-native';
import Axios from "axios";
const tespage= (props)=>{
useEffect(()=>{
generateDocumentNo();
},[])
    const generateDocumentNo =()=>{
        console.log(props.navigation.state.params.pass)
            Axios.get("http://192.168.88.152:5000/api/v1/manufacturers ",{
                headers:{"Content-Type": "application/json","authorization":"Bearer "+ props.navigation.state.params.pass}
            })
                .then(response=>{
                    console.log("check",response);
                    //get document no
                })
                .catch(error => {
                    console.log(JSON.stringify(error));
                });
            

    }
    return(
        <View>
            <Text>
                tes
            </Text>
        </View>
    )
}

export default tespage;