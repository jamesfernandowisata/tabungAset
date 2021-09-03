import React,{useState,useEffect} from 'react';
import {View, FlatList,Text, RefreshControl,StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Axios from "axios";
import {Header} from "../../../container/component/Header"
import { DataTable } from 'react-native-paper';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
const ViewAsset=(props)=>{

    const [dataList, setDataList] =useState([]);
    const [page, setPage] =useState(1);
    const [fetchMore, setFetchMore] =useState(true);
    // const [filterList, setFilterList] =useState([]);
    //const [whattoget,setwhattoget] =useState(propnavigation.infowhat);
    const columnName=["Kode","Asset Group","Serial No","Barcode No","Status"];

    //console.log(props)
    useEffect(()=>{
        getData();    
    },[]);
    useEffect(() => {
        getMoreData();
    }, [page]);

    const columnNames =columnName.map((item)=>{
        <DataTable.Title>{item}</DataTable.Title> 
    })
    const getData =(refresh)=>{
        if (refresh) {
            setFetchMore(true);
        }
        Axios.get(`http://178.128.30.185:5000/api/v1/products?page=${page}&limit=8`)
            .then((response)=>{
                //console.log(response);
                setDataList(response.data.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    const getMoreData=()=>{
        if(fetchMore){
            Axios.get(`http://178.128.30.185:5000/api/v1/products?page=${page}&limit=8`)
                .then((response)=>{
                    if(response.data.isMaxPage){
                        setFetchMore(false);
                    }
                    setDataList(response.data.data);
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                    <View styles={styles.emoteContainer}>
                        <Header emotes={faShoppingBasket} colorPick="#d90053" wheretogo="assetNav" routeSend={props.navigation} textHeader="Nice Assets"/>
                    </View>
            </View>
            <SafeAreaView >
                <View style={styles.bodyContainer}>
                <DataTable>
                                <DataTable.Header style={styles.headerTableContainer}>
                                    <DataTable.Title>Kode</DataTable.Title> 
                                    <DataTable.Title>Asset Group</DataTable.Title> 
                                    <DataTable.Title>Serial No</DataTable.Title> 
                                    <DataTable.Title>Barcode No</DataTable.Title> 
                                    <DataTable.Title>Status</DataTable.Title> 
                                </DataTable.Header>
                            <FlatList
                                data={dataList}           
                                onEndReachedThreshold={0.01}
                                onEndReached={()=> setPage(page+1)}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={false}
                                        onRefresh={()=>getData(true)}
                                    />
                                    }
                                renderItem={({item})=>(
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("viewAD", item)}
                                        >
                                        <DataTable.Row>
                                            <DataTable.Cell>{item.name}</DataTable.Cell>
                                            <DataTable.Cell>{item.value}</DataTable.Cell>
                                            <DataTable.Cell>{item.description}</DataTable.Cell>
                                            <DataTable.Cell>{item.m_product_id}</DataTable.Cell>
                                            <DataTable.Cell>{item.price}</DataTable.Cell>
                                        </DataTable.Row>
                                    </TouchableOpacity>
                                    )}
                                keyExtractor={(item, index) => index.toString()}
                                >
                            </FlatList> 
                        </DataTable>

                </View>
                        
                    </SafeAreaView>
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
        height:"19%",
       // backgroundColor:"red"
    },
    headerTableContainer:{
        alignItems: 'center'
    },
    bodyContainer:{
        paddingHorizontal:'2%',
        height:'80%',
    }
})

export default ViewAsset;