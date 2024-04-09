import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { User } from "../components/User";
import { UserList } from "../components/UserList";

export const Home = () => {
  return (
    <View style={styles.container}>
      <UserList/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});
