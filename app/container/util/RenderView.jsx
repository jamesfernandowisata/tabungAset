import React,{useState,useEffect} from 'react';
import {View, FlatList,Text, RefreshControl,StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Axios from "axios";


export function RenderView(props){
    const [dataList, setDataList] =useState([]);
    const [page, setPage] =useState(1);
    const [fetchMore, setFetchMore] =useState(true);
    const [filterList, setFilterList] =useState([]);
    //const [whattoget,setwhattoget] =useState(props.navigation.infowhat);
    const [token,setToken] = useState(props.routeSend.state.params.token);
    // const [getDocType,setDocType]=useState(navigation.infoData)
    useEffect(()=>{
        getData();
        
    },[]);
    useEffect(()=>{
        filterData();
    },[dataList])
    useEffect(() => {
        getMoreData();
    }, [page]);

    const getData =(refresh)=>{

        console.log(props)
        if (refresh) {
            setFetchMore(true);
        }
        Axios.get(`http://178.128.30.185:5000/api/v1/assettransfer?page=${page}&limit=8`,{
            headers:{"Content-Type": "application/json","authorization":token}
        })
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
            Axios.get(`http://178.128.30.185:5000/api/v1/assettransfer}?page=${page}&limit=8`)
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
        //console.log(dataList)
        var tes= dataList.filter(data=>data.c_doctype_id==props.navigation.infoData.toString())
        setFilterList(tes)
        // setTimeout(()=>{console.log(filterList)},1000)
        
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
                        <View style={styles.widthControl}>
                        <TouchableOpacity
                        //onPress={() => navigation.navigate("Detail", item)}
                        style={styles.buttonContainer}
                        >
                            <View style={styles.dataContainer}>
                                <Text>{item.documentno}</Text>
                                <Text>{item.updated}</Text>
                            </View>
                            <View style={styles.dataContainer}>
                                <Text>{item.c_bpartner_id}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        

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

    },
    buttonContainer:{
        elevation:5,
        backgroundColor: "#ffffff",
        padding:"1%",
        borderRadius: 10,
    },
    dataContainer:{
        
        flexDirection:'row',
        paddingHorizontal:'5%',
        paddingVertical:'1%',
        width: '100%',
        justifyContent: 'space-between',
    },
    widthControl:{
        paddingHorizontal:"3%",
        paddingVertical:"1%"
    }

})