import React,{useState,useEffect} from 'react';
import {Text, StyleSheet,View,TouchableOpacity,ScrollView} from "react-native"
import { NativeBaseProvider } from "native-base"
import {TextInput} from "react-native-paper"
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { Picker } from "@react-native-picker/picker";
export function FormInput(props){ 
    //console.log("Form Data:",props)
    var formType = props.formType

    const currentdate = Date()
    const [documentNo ,setDocumentNo] =useState('');
    const [documentType,setDocumentType]=useState(props.documentType);
    const [truckList,setTruckList] = useState([]);
    const [selectedTruck,setSelectedTruck] = useState();

    const [statusButton,setStatusButton] = useState("false")
    const [token,setToken] = useState(props.token);
    const [addorSave, setaddorSave] = useState(false);

    //what to send
    const [a_asset_transfer_id,seta_asset_transfer_id] = useState("");
    const [c_bpartner_id,setc_bpartner_id]=useState(""); //selectTruck
    const [c_bpartnero_id,setc_bpartnero_id] = useState("");
    const [c_bpartner_location_id,setc_bpartner_location_id] = useState("");
    const [c_bpartner_locationo_id,setc_bpartner_locationo_id]=useState("");
    const [c_doctype_id,setc_doctype_id] = useState("");
    const [documentNo ,setDocumentNo] =useState('');
    const [documentDate,setDocumentDate]=useState(currentdate);
    const [formStatus,setFormStatus] = useState("Drafted")
    const [createDate,setCreateDate] =useState("");
    const [createBy,setCreateBy] = useState(props.createdBy);
    const [updateDate,setUpdateDate] = useState("");
    const [updateBy,setUpdateBy]=useState("");
    const [description,setDescription] = useState("");

    useEffect(()=>{
        getTruck();
    },[])

    useEffect(()=>{
        getMoreInfo();
    },[selectedTruck])
    const inputLoad =JSON.stringify({
        docType: documentType,
        docdate: currentdate,
        createdby: createBy,
        updatedby: createBy,
        c_bpartner_id:selectedTruck,
        docstatus: formStatus
    });

    const inputUnLoad=JSON.stringify({
        docType: documentType,
        date: currentdate,
        createBy: createBy,
        //truckId:truckId,
        formStatus: formStatus
    });

    const generateDocumentNo =()=>{
        // if(formType ==="loading"){
        //     Axios.post("http://192.168.88.152:5000/api/v1/assettransfer",inputLoad,{
        //         headers:{"Content-Type": "application/json", "authorization":token}
        //     })
        //         .then(response=>{
        //             console.log("check",response);
        //             //get document no
        //             //setDocumentNo(response.documentNo);
        //             setaddorSave(true);
        //         })
        //         .catch(error => {
        //             console.log(JSON.stringify(error));
        //         });

        // }
        setaddorSave(true);
    }
    const getTruck =()=>{
        Axios.get("http://192.168.88.152:5000/api/v1/bpartner",{
            headers:{"Content-Type": "application/json","authorization":token}
        })
        .then(response => {
            //console.log("check", response);
            setTruckList(response.data.data);
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        });
    }

    const getMoreInfo =()=>{
        Axios.get(`http://192.168.88.152:5000/api/v1/bpartner/${selectedTruck}`,{
            headers:{"Content-Type": "application/json","authorization":token}
        })
        .then(response => {
            console.log("check", response);
            setc_bpartner_id(response.data.c_bpartner_id)
            setc_bpartnero_id(response.data.c_bpartner_id)
            if(documentType==="loading"){
                setc_doctype_id("1")
            }
            //setTruckList(response.data.data);
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        });
        Axios.get(`http://192.168.88.152:5000/api/v1/partnerloc/${selectedTruck}`,{
            headers:{"Content-Type": "application/json","authorization":token}
        })
        .then(response => {
            console.log("check", response);
            setc_bpartner_location_id(response.data.c_bpartner_lcoation_id)
            setc_bpartner_locationo_id(response.data.c_bpartner_lcoation_id)
            //setTruckList(response.data.data);
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        });
    }

    if(formType ==="loading"){
        return (    
            <NativeBaseProvider>
                <ScrollView>
                    <Text>Document No.</Text>
                    <TextInput value={documentNo} disabled={true}/>
                    <Text>Document Type</Text>
                    <TextInput value={documentType} disabled={true}/>
                    <Text>Document Date</Text>
                    <TextInput value={currentdate} disabled={true}/>
                    <Text>Created by</Text>
                    <TextInput value={createBy} disabled={true}/>
                    <Text>Truck</Text>
                        <View style={styles.pickerInput}>
                            <Picker
                                style={styles.pickerText}
                                selectedValue={truckList}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedTruck(itemValue)
                                }
                            >
                                {truckList.map(item => {
                                    console.log(item);
                                    return (
                                    <Picker.Item
                                        key={item.name}
                                        label={item.name}
                                        value={item.c_bpartner_id}
                                    />
                                    );
                                })}
                            </Picker>
                        </View>
                    <Text>Document Status</Text>
                    <TextInput value={formStatus} disabled={true}/>
                </ScrollView>
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
                onPress={generateDocumentNo} >
                {
                    addorSave ? (
                        <FontAwesomeIcon icon={faSave} size={36} color={"#eeeeee"}/>
                    ):<FontAwesomeIcon icon={faPlus} size={36} color={"#eeeeee"}/>
                }
                </TouchableOpacity>
                </View>
            </NativeBaseProvider>
    )
    }
    else if(formType ==="unloading"){
        return (    
            <NativeBaseProvider>
                <ScrollView>
                    <Text>Document No.</Text>
                    <TextInput value={documentNo} disabled={true}/>
                    <Text>Document Type</Text>
                    <TextInput value={documentType} disabled={true}/>
                    <Text>Document Date</Text>
                    <TextInput value={currentdate} disabled={true}/>
                    <Text>Created by</Text>
                    <TextInput value={createBy} disabled={true}/>
                    <Text>Truck</Text>
                    <Text>Document Status</Text>
                    <TextInput value={formStatus} disabled={true}/>
                </ScrollView>
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
                <ScrollView>
                    <Text>Document No.</Text>
                    <TextInput value={documentNo} disabled={true}/>
                    <Text>Delivery Code</Text>
                    <TextInput value={documentNo} disabled={true}/>
                </ScrollView>
                <View>
                <TouchableOpacity 
                style={{
                    position: "absolute",
                    zIndex: 9,
                    right: "7%",
                    bottom:"15%",
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
    nextButton:{
        bottom:"2%",
        paddingLeft:"35%",
        paddingRight:"35%",
        paddingTop:"8%",
    },
    pickerInput: {
        //alignSelf: "stretch",
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "#ffffff",
        fontSize: 23,
        borderRadius: 5,
        elevation: 3
    },
    pickerText: {
        alignSelf: "flex-end",
        fontSize: 20,
        width: "100%",
        height: 50
    },

})