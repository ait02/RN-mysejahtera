import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const TwoBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOneView}>
        <View style={{ justifyContent: "center" }}>
          <SimpleLineIcons name="graph" color={"#3765FF"} size={40} />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.primaryText}>26,543</Text>
          <Text style={styles.secondaryText}>new cases today</Text>
        </View>
      </View>
      <View style={styles.boxTwoView}>
        <View style={{ justifyContent: "center" }}>
          <MaterialIcons name="masks" color={"#3765FF"} size={40} />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.primaryText}>MCO 3.0</Text>
          <Text style={styles.secondaryText}>view latest guidelines</Text>
        </View>
      </View>
    </View>
  );
};

export default TwoBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 50,
  },
  boxOneView: {
    marginHorizontal: 10,
    width: 160,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  boxTwoView: {
    marginHorizontal: 10,
    width: 160,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  primaryText: { fontSize: 20, fontWeight: "bold", color: "#3765FF" },
  secondaryText: { fontSize: 10 },
});
