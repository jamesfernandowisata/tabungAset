import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
export function HeaderDetailNavigation(props) {
  if (props.currentPosition === "1") {
    console.log(props);
    return (
      <View style={styles.subNavigate}>
        <Text
          style={{ color: props.colorPick, fontWeight: "bold", fontSize: 20 }}
        >
          {props.text1}
        </Text>
        <TouchableOpacity
          onPress={() => props.routeSend.navigate(props.wheretogo)}
        >
          <Text style={styles.subNavigateText}>{props.text2}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    //console.log(props)
    return (
      <View style={styles.subNavigate}>
        <TouchableOpacity
          onPress={() => props.routeSend.navigate(props.wheretogo)}
        >
          <Text style={styles.subNavigateText}>{props.text1}</Text>
        </TouchableOpacity>
        <Text
          style={{ color: props.colorPick, fontWeight: "bold", fontSize: 20 }}
        >
          {props.text2}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subNavigateText: {
    fontSize: 20,
    fontWeight: "100",
    color: "gray"
  },
  subNavigate: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "5%",
    paddingLeft: "30%",
    paddingRight: "30%",
    paddingTop: "4%"
  }
});
