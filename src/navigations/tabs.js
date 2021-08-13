import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ScanQRScreen from "../screens/ScanQRScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import IonIcons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const QRCodeButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{ top: -35, justifyContent: "center", alignItems: "center" }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#3765FF",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#F5F9FA",
          height: 90,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IonIcons
                name={focused ? "ios-home" : "ios-home-outline"}
                size={28}
                color={focused ? "#000" : "#565656"}
              />
              <Text>Dashboard</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesome
                name={focused ? "bell" : "bell-o"}
                size={28}
                color={focused ? "#000" : "#565656"}
              />
              <Text>Notifications</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ScanQR"
        component={ScanQRScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={28}
              color={"#fff"}
            />
          ),
          tabBarButton: (props) => (
            <View style={{ alignItems: "center" }}>
              <QRCodeButton {...props} />
              <Text style={{ bottom: 30, color: "#272727" }}>Check-In</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IonIcons
                name={focused ? "pie-chart" : "pie-chart-outline"}
                size={28}
                color={focused ? "#000" : "#565656"}
              />
              <Text>Statistics</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesome
                name={focused ? "user" : "user-o"}
                size={28}
                color={focused ? "#000" : "#565656"}
              />
              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {},
});

export default Tabs;
