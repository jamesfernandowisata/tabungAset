import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
  Center,
  Button,
  ButtonGroup,
  NativeBaseProvider,
  Heading
} from "native-base";
import { FormInput } from "../../container/util/FormInput";
import { Header } from "../../container/component/Header";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { HeaderDetailNavigation } from "../../container/component/HeaderDetailNavigation";
import { paddingBottom } from "styled-system";
const loadingHeaderAdd = props => {
  console.log("ini add", props);
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View styles={styles.emoteContainer}>
            <Header
              emotes={faTruckLoading}
              colorPick="#58BDDD"
              wheretogo="loadHead"
              routeSend={props.navigation}
              textHeader="What's Loading"
            />
          </View>
          <View styles={styles.subNavContainer}>
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
        <View style={styles.inputHeader}>
          <FormInput
            formType="loading"
            colorPick="#98D6EA"
            token={props.navigation.state.params.token}
            documentType="Loading"
            createdBy={props.navigation.state.params.user}
          />
        </View>
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
    height: "29%"
  },
  inputHeader: {
    flex: 1,
    paddingLeft: "7%",
    paddingRight: "7%",
    paddingBottom: "5%"
  },
  textInputStyle: {
    height: 40,
    fontWeight: "bold",
    marginBottom: "1%"
  },
  subHead: {
    justifyContent: "center",
    padding: "3%"
  },
  subHeadtext: {
    fontWeight: "bold"
  },
  subNavigateMainText: {
    color: "#98D6EA",
    fontWeight: "bold",
    fontSize: 20
  },
  nextButtonStyle: {
    backgroundColor: "#98D6EA",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  nextButtonStyleText: {
    fontSize: 30,
    justifyContent: "center",
    color: "#ffffff"
  },
  subNavigateText: {
    fontSize: 20,
    fontWeight: "100"
  },
  subNavigate: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "5%",
    paddingLeft: "30%",
    paddingRight: "30%"
  },
  touchButton: {
    position: "absolute",
    zIndex: 9,
    right: 20,
    bottom: 20,
    backgroundColor: "#98D6EA",
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  }
});

export default loadingHeaderAdd;
