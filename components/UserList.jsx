import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { USERS } from "../Data/Data";
import { User } from "./User";

export const UserList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={USERS}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => <User avatar={item.avatar} name={item.username} email={item.email}
        id={item.userId}
        />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "98%",
  },
});
