import React,{useState} from 'react';
import {Text, StyleSheet,View,TouchableOpacity} from "react-native"
import { Center,Button, ButtonGroup,NativeBaseProvider,Heading } from "native-base"
import {TextInput} from "react-native-paper"
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function FormInput(props){ 
    console.log("Form Data:",props)
    var formType = props.formType

    const currentdate = Date()
    const [documentNo ,setDocumentNo] =useState('');
    const [documentType,setDocumentType]=useState('');
    const [createBy,setCreateBy] = useState('');
    const [truckId,setTruckId] = useState('');
    const [formStatus,setFormStatus] = useState("Drafted")
    const [statusButton,setStatusButton] = useState("false")

    const inputLoad =JSON.stringify({
        docType: documentType,
        date: currentdate,
        createBy: createBy,
        truckId:truckId,
        formStatus: formStatus
    });

    const inputUnLoad=JSON.stringify({
        docType: documentType,
        date: currentdate,
        createBy: createBy,
        truckId:truckId,
        formStatus: formStatus
    });
    const generateDocumentNo =()=>{
        if(formType ==="loading"){
            Axios.post("link",inputLoad,{
                headers:{"Content-Type": "application/json"}
            })
                .then(response=>{
                    console.log("check",response);
                    //get document no
                    setDocumentNo(response.documentNo);
                    setStatusButton("true");
                })
                .catch(error => {
                    console.log(JSON.stringify(error));
                });
        }
    }


    if(formType ==="loading"){
        return (    
            <NativeBaseProvider>
                <View>
                    <Text>Document No.</Text>
                    <TextInput value={documentNo} disabled={true}/>
                    <Text>Document Type</Text>
                    <TextInput value={documentType} disabled={true}/>
                    <Text>Document Date</Text>
                    <TextInput value={currentdate} disabled={true}/>
                    <Text>Created by</Text>
                    <TextInput value={createBy} disabled={true}/>
                    <Text>Truck</Text>
                    <TextInput value={truckId} disabled={true}/>
                    <Text>Document Status</Text>
                    <TextInput value={formStatus} disabled={true}/>
                </View>
                <View>
                <TouchableOpacity 
                style={{
                    position: "absolute",
                    zIndex: 9,
                    right: "7%",
                    bottom:"10%",
                    backgroundColor: props.colorPick,
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 8}} 
                onPress={generateDocumentNo} disabled={statusButton}>
                    <FontAwesomeIcon icon={faPlus} size={36} color={"#eeeeee"}/>
                </TouchableOpacity>
                </View>
            </NativeBaseProvider>
    )
    }
    else if(formType ==="unloading"){
        return (    
            <NativeBaseProvider>
                <View>
                    <Text>Document No.</Text>
                    <TextInput value={documentNo} disabled={true}/>
                    <Text>Document Type</Text>
                    <TextInput value={documentType} disabled={true}/>
                    <Text>Document Date</Text>
                    <TextInput value={currentdate} disabled={true}/>
                    <Text>Created by</Text>
                    <TextInput value={createBy} disabled={true}/>
                    <Text>Truck</Text>
                    <TextInput value={truckId} disabled={true}/>
                    <Text>Document Status</Text>
                    <TextInput value={formStatus} disabled={true}/>
                </View>
                <View>
                <TouchableOpacity 
                style={{
                    position: "absolute",
                    zIndex: 9,
                    right: "7%",
                    bottom:"10%",
                    backgroundColor: props.colorPick,
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 8}} 
                onPress={generateDocumentNo} disabled={statusButton}>
                    <FontAwesomeIcon icon={faPlus} size={36} color={"#eeeeee"}/>
                </TouchableOpacity>
                </View>
            </NativeBaseProvider>
    )
    }
    else if(formType ==="delivering"){
        return (    
            <NativeBaseProvider>
                <View>
                    <Text>Document No.</Text>
                    <TextInput value={documentNo} disabled={true}/>
                    <Text>Delivery Code</Text>
                    <TextInput value={documentNo} disabled={true}/>
                </View>
                <View>
                <TouchableOpacity 
                style={{
                    position: "absolute",
                    zIndex: 9,
                    right: "7%",
                    bottom:"10%",
                    backgroundColor: props.colorPick,
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 8}} 
                onPress={generateDocumentNo} disabled={statusButton}>
                    <FontAwesomeIcon icon={faPlus} size={36} color={"#eeeeee"}/>
                </TouchableOpacity>
                </View>
            </NativeBaseProvider>
    )
    }
}

const styles =StyleSheet.create({
    touchButton:{
        position: "absolute",
        zIndex: 9,
        right: 20,
        bottom:20,
        backgroundColor: "#003f5a",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8,
    },
    nextButton:{
        bottom:"2%",
        paddingLeft:"35%",
        paddingRight:"35%",
        paddingTop:"8%",
    },

})