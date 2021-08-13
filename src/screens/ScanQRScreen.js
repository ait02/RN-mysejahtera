import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ScanQRScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Scan QR</Text>
    </View>
  );
};

export default ScanQRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
