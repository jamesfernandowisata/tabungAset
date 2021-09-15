    import React, { useState, useEffect } from "react";
    import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView
    } from "react-native";
    import { NativeBaseProvider } from "native-base";
    import { TextInput } from "react-native-paper";
    import Axios from "axios";
    import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
    import { faPlus } from "@fortawesome/free-solid-svg-icons";
    import { faSave } from "@fortawesome/free-solid-svg-icons";
    import { Picker } from "@react-native-picker/picker";

    export function FormInput(props) {
    //console.log("Form Data:",props)
        var formType = props.formType;

        const currentdate = new Date().toISOString();
        const [documentType,setDocumentType]=useState(props.documentType);
        const [truckList,setTruckList] = useState([]);
        const [selectedTruck,setSelectedTruck] = useState();

        const [statusButton,setStatusButton] = useState("false")
        const [token,setToken] = useState(props.token);
        const [addorSave, setaddorSave] = useState(false);


        //what to send
        //const [a_asset_transfer_id,seta_asset_transfer_id] = useState("1");
        const [c_bpartner_id,setc_bpartner_id]=useState("0"); //selectTruck
        const [c_bpartnero_id,setc_bpartnero_id] = useState("0");
        const [c_bpartner_location_id,setc_bpartner_location_id] = useState("1");
        const [c_bpartner_locationo_id,setc_bpartner_locationo_id]=useState("1");
        const [c_doctype_id,setc_doctype_id] = useState(props.doctype);
        const [documentNo ,setDocumentNo] =useState('');
        const [documentDate,setDocumentDate]=useState(currentdate);
        const [formStatus,setFormStatus] = useState("Drafted")
        const [createDate,setCreateDate] =useState("");
        const [createBy,setCreateBy] = useState(props.createdBy);
        const [updateDate,setUpdateDate] = useState("");
        const [updateBy,setUpdateBy]=useState("");
        const [description,setDescription] = useState("0");
    
        useEffect(()=>{
            //console.log(inputLoad)
        },[c_bpartner_locationo_id,description,c_doctype_id])

        useEffect(()=>{
            console.log("dezz")
        },[documentNo])

        useEffect(() => {
            getTruck();
        }, []);
        // useEffect(()=>{
        //     fixDate();
        // },[])
        useEffect(() => {
            getMoreInfo();
        }, [selectedTruck]);

        const inputLoad = JSON.stringify({
            //a_asset_transfer_id:a_asset_transfer_id,
            c_bpartner_id:c_bpartner_id,
            c_bpartnerto_id :c_bpartnero_id,
            c_bpartner_location_id:c_bpartner_location_id,
            c_bpartner_locationto_id:c_bpartner_locationo_id,
            c_doctype_id:c_doctype_id,
            docdate:documentDate,
            docstatus:formStatus,
            createdby:createBy,
            created:documentDate,
            updated:documentDate,
            updatedby:createBy,
            description:description
        });




        const getTruck =()=>{

                getMoreInfo();

                    Axios.get("http://178.128.30.185:5000/api/v1/bpartner",{
                        headers:{"Content-Type": "application/json","authorization":token}
                    })
                    .then(response => {
                        console.log("check", response.data.data);
                    //get document no
                    //setDocumentNo(response.data.data.documentNo);
                    setTruckList(response.data.data);
                    })
                    .catch(error => {
                        console.log(JSON.stringify(error));
                    });
                }

                const getMoreInfo =()=>{
                    Axios.get(`http://178.128.30.185:5000/api/v1/bpartner/${selectedTruck}`,{
                        headers:{"Content-Type": "application/json","authorization":token}
                    })
                        .then(response => {
                            //console.log("check partner", response.data.data);
                            response.data.data.map(item=>{
                                console.log(item.description)
                                setc_bpartner_id(item.c_bpartner_id)
                                setc_bpartnero_id(item.c_bpartner_id)
                                setDescription(item.description)
                            })
                            //setTruckList(response.data.data);
                        })
                        .catch(error => {
                            console.log(JSON.stringify(error));
                        });
                    Axios.get(`http://178.128.30.185:5000/api/v1/partnerloc/${selectedTruck}`,{
                        headers:{"Content-Type": "application/json","authorization":token}
                    })
                    .then(response => {
                        //console.log("check location", response.data.data);
                        response.data.data.map((item)=>{
                            //console.log(item)
                            setc_bpartner_location_id(item.c_bpartner_location_id)
                            setc_bpartner_locationo_id(item.c_bpartner_location_id)
                        })
                        //setTruckList(response.data.data);
                    })
                    .catch(error => {
                        console.log(JSON.stringify(error));
                    });
                }

        const generateDocumentNo =()=>{
        if(formType ==="general"){
                Axios.post("http://178.128.30.185:5000/api/v1/assettransfer",inputLoad,{
                    headers:{"Content-Type": "application/json", "authorization":token}
                })
                    .then(response=>{
                        console.log("check",response);
                        //get document no
                        setDocumentNo(response.data.data.documentNo);
                        setaddorSave(true);
                    })
                    .catch(error => {
                        console.log(JSON.stringify(error));
                    });
                console.log(inputLoad);
            }
            //setaddorSave(true);
        }
    
    if (formType === "loading") {
        return (
        <NativeBaseProvider>
            <ScrollView>
            <Text>Document No.</Text>
            <TextInput value={documentNo} disabled={true} />
            <Text>Document Type</Text>
            <TextInput value={documentType} disabled={true} />
            <Text>Document Date</Text>
            <TextInput value={currentdate} disabled={true} />
            <Text>Created by</Text>
            <TextInput value={createBy} disabled={true} />
            <Text>Truck</Text>
            <View style={styles.pickerInput}>
                <Picker
                style={styles.pickerText}
                selectedValue={selectedTruck}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedTruck(itemValue)
                }
                disabled={addorSave}
                //value=''
                label='tesaja'
                >
                {truckList.map(item => {
                    //console.log(item);
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
            <TextInput value={formStatus} disabled={true} />
            </ScrollView>
            <View>
            <TouchableOpacity
                style={{
                position: "absolute",
                zIndex: 9,
                right: "7%",
                bottom: "10%",
                backgroundColor: props.colorPick,
                width: 80,
                height: 80,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                elevation: 8
                }}
                onPress={generateDocumentNo}
            >
                {addorSave ? (
                <FontAwesomeIcon icon={faSave} size={36} color={"#eeeeee"} />
                ) : (
                <FontAwesomeIcon icon={faPlus} size={36} color={"#eeeeee"} />
                )}
            </TouchableOpacity>
            </View>
        </NativeBaseProvider>
        );
    }
    
    
    }


    const styles = StyleSheet.create({
    touchButton: {
        position: "absolute",
        zIndex: 9,
        right: "7%",
        bottom: "10%",
        backgroundColor: "#003f5a",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
    },
    nextButton: {
        bottom: "2%",
        paddingLeft: "35%",
        paddingRight: "35%",
        paddingTop: "8%"
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
    }
    });
