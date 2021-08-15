import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Headlines = () => {
  return (
    <ScrollView horizontal style={{ top: -60 }}>
      <View style={styles.greenBox}></View>
      <View style={styles.greenBox}></View>
      <View style={styles.greenBox}></View>
      <View style={styles.greenBox}></View>
      <View style={styles.greenBox}></View>
      <View style={styles.greenBox}></View>
    </ScrollView>
  );
};

export default Headlines;

const styles = StyleSheet.create({
  greenBox: {
    backgroundColor: "#46BA5D",
    height: 180,
    width: 280,
    borderRadius: 6,
    margin: 10,
  },
});
