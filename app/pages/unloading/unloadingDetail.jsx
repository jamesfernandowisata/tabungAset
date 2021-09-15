    import React, { useState, useEffect } from "react";
    import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    SafeAreaView
    } from "react-native";
    import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
    import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
    import { faPlus } from "@fortawesome/free-solid-svg-icons";
    import { Header } from "../../container/component/Header";
    import { NativeBaseProvider } from "native-base";
    import { HeaderDetailNavigation } from "../../container/component/HeaderDetailNavigation";
    import { FlatList, ScrollView } from "react-native-gesture-handler";
    import { RenderView } from "../../container/util/RenderView";
    import { loadDetAdd } from "../loading/loadingDetailAdd";

    // const Item = ({ id, title, status }) => (
    //   <View style={styles.Item}>
    //     <Text style={styles.id}>{id}</Text>
    //     <Text style={styles.title}>{title}</Text>
    //     <Text style={styles.status}>{status}</Text>
    //   </View>
    // );

    const unloadingDetail = props => {
    const [documentNo, setDocumentNo] = useState("");
    const [documentType, setDocumentType] = useState("");
    const [documentDate, setDocumentDate] = useState("");
    const [createBy, setCreateBy] = useState("");
    const [documentStatus, setDocumentStatus] = useState("");
    const [data, setDataList] = useState("");

    return (
        <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
            <View style={styles.emoteContainer}>
                <Header
                emotes={faBoxOpen}
                colorPick="#FFA668"
                wheretogo="unloadAddH"
                routeSend={props.navigation}
                textHeader="Unloading Items"
                />
            </View>
            <View style={styles.subNavContainer}>
                <HeaderDetailNavigation
                routeSend={props.navigation}
                colorPick="#FFA668"
                currentPosition="2"
                text1="Header"
                text2="Details"
                wheretogo="unloadDetAdd"
                />
            </View>
            </View>

            <SafeAreaView style={styles.bodyContainer}>
            {/* <FlatList
                style={styles.dataContainer}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={props => props.id}
            /> */}
            </SafeAreaView>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("loadDetAdd")}
            style={styles.touchButton}
            >
            <FontAwesomeIcon icon={faPlus} size={36} color={"#eeeeee"} />
            </TouchableOpacity>
        </SafeAreaView>
        </NativeBaseProvider>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "10%"
    },
    headerContainer: {
        flexDirection: "column",
        height: "19%"
    },
    emoteContainer: {},
    subNavContainer: {},
    bodyContainer: {},
    daContainer: {
        flexDirection: "row"
    },
    touchButton: {
        position: "absolute",
        zIndex: 9,
        right: "7%",
        bottom: "10%",
        backgroundColor: "#FFA668",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
    },
    Item: {
        backgroundColor: "#38A3A5",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    id: {
        color: "#FFFFFF"
    },
    title: {
        color: "#FFFFFF"
    },
    status: {
        color: "#FFFFFF"
    }
    });

    export default unloadingDetail;
