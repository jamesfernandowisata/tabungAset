import React,{useState} from 'react';
import {View,Text} from 'react-native'
const ViewAssetDetail=(props)=>{
    console.log(props)
    const [sesuatu,setSesuatu]=useState(props.getParam("name"))
    return(
        <View>
            <Text>
                {sesuatu}
            </Text>
        </View>
    )
}

export default ViewAssetDetail;