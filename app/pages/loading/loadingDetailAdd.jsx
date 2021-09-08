import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
  RefreshControl
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
//import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../container/component/Header";
import { NativeBaseProvider, Center } from "native-base";
import { QRScanner } from "../../container/util/QrScanner";
import { TextInput } from "react-native-paper";
//import { RenderView } from "../../container/util/RenderView";
import { HeaderDetailNavigation } from "../../container/component/HeaderDetailNavigation";
import { BarCodeScanner } from "expo-barcode-scanner";
import { overflow, justifyContent, paddingTop } from "styled-system";
import Axios from "axios";

const loadingDetailAdd = props => {
  const [hasPermission, setHasPermission] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("not yet Scanned");
  const [count, setCount] = useState(0);
  const currentdate = Date();
  const [fetchMore, setFetchMore] = useState(true);
  const [documentNo, setDocumentNo] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [formStatus, setFormStatus] = useState("Loaded");

  const inputLoad = JSON.stringify({
    docType: documentType,
    date: currentdate,
    formStatus: formStatus
  });

  const getData = refresh => {
    if (refresh) {
      setFetchMore(true);
    }
    Axios.get(`http://192.168.88.152:5000/api/v1/docstatus`)
      .then(response => {
        setDataList(response.data.data);
      })
      .catch(error => {});
  };

  const incrementCount = count => {
    setCount(count + 1);
    setScanned(false);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);

    console.log("\ntype: " + type + "\nData: " + data + "\n\nCount :" + count);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View styles={styles.emoteContainer}>
            <View style={styles.buttonCount}>
              {scanned && (
                <Button title={"Save"} onPress={() => incrementCount(false)} />
              )}
            </View>
            <Header
              emotes={faTruckLoading}
              colorPick="#58BDDD"
              wheretogo="loadDet"
              routeSend={props.navigation}
              textHeader="What's Loading"
            />
          </View>
          <View styles={styles.subNavContainer}>
            <HeaderDetailNavigation
              routeSend={props.navigation}
              colorPick="#58BDDD"
              currentPosition="2"
              text1="Header"
              text2="Details"
              wheretogo="loadDet"
            />
          </View>
        </View>

        <ScrollView style={styles.bodyContainer}>
          <View style={styles.qrContainer}>
            <Center>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: 400, width: 400 }}
              />
            </Center>
          </View>
          <Text style={styles.scanText}>{text}</Text>
          <Text style={styles.counter}>Count: {count}</Text>

          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            />
          )}
          {/* <QRScanner /> */}
          <Text>Document No.</Text>
          <TextInput value={documentNo} disabled={true} />
          <Text>Document Type</Text>
          <TextInput value={documentType} disabled={true} />
          <Text>Document Status</Text>
          <TextInput value={formStatus} disabled={true} />
        </ScrollView>
      </View>
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
  bodyContainer: {
    marginTop: 50
  },
  qrContainer: {
    height: 300,
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  scanText: {
    fontSize: 16,
    margin: 19
  },
  buttonCount: {
    alignSelf: "flex-end",
    position: "absolute",
    paddingEnd: "20%",
    marginTop: "10%"
  }
});

export default loadingDetailAdd;
