import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/Login";
import Termo from "./src/Termo";
import Tabs from "./src/Tabs";

const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Termo" component={Termo} />
        <Tab.Screen name="Tabs" component={Tabs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
