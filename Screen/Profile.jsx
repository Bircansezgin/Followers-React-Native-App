import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { USERS, Users } from "../Data/Data";
import { User } from "../components/User";



export const Profile = ({ route }) => {
  const [user, setUser] = useState({})
  
useEffect(() => {
  (async () => {
    const id = route.params.userID;
    const findUser = USERS.find((user) => user.userId === id);
    setUser(findUser);
      //
  })();
}, []);



  return (
    <View style={styles.container}>
      <Text> {user.email} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
