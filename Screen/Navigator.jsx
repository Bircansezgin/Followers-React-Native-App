import { View } from "react-native";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Text } from "react-native";

const Stack = createStackNavigator();
const Logo = () => {
  return (
    <View
      style={{
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 5,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
        Dev
      </Text>
    </View>
  );
};

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 34,
          },
          headerStyle: {
            height: 150,
          },
          headerLeft: () => <Logo />,
        }}
      />
      <Stack.Screen name="Profile" component={Profile}
            options={{
              title: "Profile",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 34,
              },
  
            }}
       />
    </Stack.Navigator>
  );
};
