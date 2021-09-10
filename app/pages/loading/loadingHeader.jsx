import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../container/component/Header";
import { NativeBaseProvider } from "native-base";
import { RenderView } from "../../container/util/RenderView";
import { HeaderDetailNavigation } from "../../container/component/HeaderDetailNavigation";
import { paddingLeft } from "styled-system";

const loadingHeader = props => {
  //console.log("isi header",props)
  const [showDraft, setShowDraft] = useState(false);
  const [showOnGoing, setShowOnGoing] = useState(false);
  const [showHidden, setShowHidden] = useState(true);
  const [token, setToken] = useState(props.navigation.state.params.token);
  const [user, setUser] = useState(props.navigation.state.params.user);
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.emoteContainer}>
            <Header
              emotes={faTruckLoading}
              colorPick="#58BDDD"
              wheretogo="home"
              routeSend={props.navigation}
              textHeader="Loading Items"
              token={token}
            />
          </View>
          <View style={styles.subNavContainer}>
            <HeaderDetailNavigation
              routeSend={props.navigation}
              colorPick="#58BDDD"
              currentPosition="1"
              text1="Header"
              text2="details"
              wheretogo="loadDet"
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.subBodyContainer}>
            <View style={styles.subsubBodyContainer}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Drafted</Text>
              <TouchableOpacity onPress={() => setShowDraft(!showDraft)}>
                <FontAwesomeIcon
                  icon={showHidden ? faChevronDown : faChevronUp}
                  size={20}
                  color="#98D6EA"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.subsubBodyContainer2}>
              {showDraft ? (
                <RenderView infoData="1" infowhat="products" />
              ) : null}
            </View>
          </View>
          <View style={styles.subBodyContainer}>
            <View style={styles.subsubBodyContainer}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>On Going</Text>
              <TouchableOpacity onPress={() => setShowOnGoing(!showOnGoing)}>
                <FontAwesomeIcon
                  icon={showHidden ? faChevronDown : faChevronUp}
                  size={20}
                  color="#98D6EA"
                />
              </TouchableOpacity>
            </View>
            {showOnGoing ? (
              <RenderView infoData="2" infowhat="products" />
            ) : null}
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("loadAddH", { token: token, user: user })
          }
          style={styles.touchButton}
        >
          <FontAwesomeIcon icon={faPlus} size={36} color={"#eeeeee"} />
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%"
  },
  subBodyContainer: {
    paddingBottom: "3%"
  },
  subsubBodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  subsubBodyContainer2: {
    alignItems: "center"
  },
  headerContainer: {
    flexDirection: "column",
    height: "29%"
    // backgroundColor:"red"
  },
  emoteContainer: {
    //backgroundColor: "",
  },
  subNavContainer: {},
  bodyContainer: {
    //backgroundColor: ""
    paddingTop: "1%",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  touchButton: {
    position: "absolute",
    zIndex: 9,
    right: "13%",
    bottom: "3.5%",
    backgroundColor: "#98D6EA",
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  }
});

export default loadingHeader;
