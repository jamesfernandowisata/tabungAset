import React,{useState,useEffect} from 'react';
import {View, FlatList,Text, RefreshControl,StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Axios from "axios";


export function RenderView(navigation){
    const [dataList, setDataList] =useState([]);
    const [page, setPage] =useState(1);
    const [fetchMore, setFetchMore] =useState(true);
    const [filterList, setFilterList] =useState([]);

    // const [getDocType,setDocType]=useState(navigation.infoData)
    useEffect(()=>{
        getData();
        filterData();
    },[]);
    useEffect(() => {
        getMoreData();
    }, [page]);

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

    const filterData=()=>{
        console.log(dataList)
        var tes= dataList.filter(data=>data.c_uom_id==navigation.infoData.toString())
        setFilterList(tes)
        setTimeout(()=>{console.log(filterList)},1000)
        
    }
    return(
        <SafeAreaView>
            <View>
            <FlatList
                data={filterList}           
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
                    onPress={() => navigation.navigate("Detail", item)}
                    >
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            
                keyExtractor={(item, index) => index.toString()}
            >
            </FlatList>

        </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    FlatListContainer:{
        flex: 1,
        paddingVertical: '2%',
        paddingHorizontal:'2%',
        marginTop: '2%',
        marginHorizontal: '1%',
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 5,

    }


})