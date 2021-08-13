import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello Arif,</Text>
      <Text style={styles.welcomeText}>there are 20 new cases</Text>
      <Text style={styles.welcomeText}>near you this week.</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginTop: 20,
    height: "30%",
  },
  welcomeText: {
    fontSize: 24,
    color: "#fff",
  },
});
