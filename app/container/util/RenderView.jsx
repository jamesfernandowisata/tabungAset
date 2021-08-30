import React,{useState,useEffect} from 'react';
import {View, FlatList,Text, RefreshControl,StyleSheet, SafeAreaView} from 'react-native';
import Axios from "axios";


export function RenderView(navigation){
    const [dataList, setDataList] =useState([]);
    const [page, setPage] =useState(1);
    const [fetchMore, setFetchMore] =useState(true);
    const [draftedList, setDraftedList] =useState([]);
    const [onGoingList,setOnGoingList] =useState([]);

    useEffect(()=>{
        getData();
    },[]);
    useEffect(() => {
        getMoreData();
    }, [page]);
    const getData =(refresh)=>{
        if (refresh) {
            setFetchMore(true);
        }
        Axios.get(``)
            .then((response)=>{
                setDataList(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    const getMoreData=()=>{
        if(fetchMore){
            Axios.get(``)
                .then((response)=>{
                    if(response.data.isMaxPage){
                        setFetchMore(false);
                    }
                    setDataList(response.data);
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    }

    return(
        <SafeAreaView>
            <View>
            <FlatList
                data={dataList}
                style={styles.FlatListContainer}            
                onEndReachedThreshold={0.01}
                onEndReached={()=> setPage(page+1)}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={()=>getProduct(true)}
                    />
                }
                renderItem={({item})=>(
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Detail", item)}
                    >
                        <View>
                            <Text>{item.nama}</Text>
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
        width:'44%',
        marginTop: '2%',
        marginHorizontal: '1%',
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 5,

    }


})