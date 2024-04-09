import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export const User = ({ avatar, name, email, id }) => {
  const navigation = useNavigation(); //Sayfalar arasi gecis icin kullanilir!

  const handleProfile = () =>{
    console.log("BASILDI" + id);
    navigation.navigate("Profile", {userID: id});
  }

  return (
    <TouchableOpacity onPress={handleProfile} >
    <View style={styles.container}>

      <View style={styles.profileHeader}>
       <View style={{ backgroundColor: "green", width: 15, height: 15, borderRadius: 15, position:"relative" , right:35, top:5}}></View>
        <Image source={{ uri: avatar }} style={styles.avatarImage} />
      </View>


      <View style={styles.profileMiddle}>
        <Text style={{ fontWeight: "bold", fontSize:17 }}>{name}</Text>
        <Text style={{ color: "gray" }}>{email}</Text>
      </View>


      <View style={styles.profileButton}>
          <AntDesign name="doubleright" size={24} color="black" />
      </View>


    </View>
    </TouchableOpacity>
  );
};

styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    margin: 2,
    padding: 2,

    flexDirection: "row",
  },

  profileHeader: {

    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    
  
  },

  profileMiddle: {


    flex: 4,
    justifyContent: "center",
  },

  profileButton: {


    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "purple",
  },
});
