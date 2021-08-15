import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.mysejahteraView}>
          <Ionicons name="reorder-two-outline" size={24} color={"#fff"} />
          <Text style={styles.mysejahteraText}>mysejahtera</Text>
        </View>
        <View style={styles.locationStatusView}>
          <View>
            <Text style={styles.locationStatusTextLocation}>Putrajaya</Text>
            <Text style={styles.locationStatusTextStatus}>red zone</Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              backgroundColor: "red",
              height: 35,
              width: 35,
              borderRadius: 50,
            }}
          />
        </View>
        <View>
          <View></View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  background: {
    display: "flex",
    height: "20%",
  },
  container: {
    // height: "8%",
    marginTop: 40,
    marginHorizontal: 15,
  },
  mysejahteraView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    width: 140,
  },
  mysejahteraText: {
    marginLeft: 5,
    fontSize: 18,
    color: "#fff",
  },
  locationStatusView: {
    position: "absolute",
    right: 15,
    borderRadius: 50,
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 4,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  locationStatusTextLocation: {
    textAlign: "right",
  },
  locationStatusTextStatus: {
    textAlign: "right",
    fontWeight: "bold",
  },
});
