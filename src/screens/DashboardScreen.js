import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Header from "../components/Dashboard/Header";
import Headlines from "../components/Dashboard/Headlines";
import TwoBox from "../components/Dashboard/TwoBox";
import Welcome from "../components/Dashboard/Welcome";

const DashboardScreen = () => {
  const HEIGHT = Dimensions.get("window").height;
  return (
    <View style={styles.background}>
      <LinearGradient
        colors={["#5D81E8", "#315EF1"]}
        style={styles.blueBackground}
      >
        <Header />
        <Welcome />
        <TwoBox />
      </LinearGradient>
      <View style={styles.whiteBackground}>
        <Headlines />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {},
  blueBackground: {
    height: "50%",
  },
  whiteBackground: {
    height: "50%",
  },
});
