import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "./Perfil";
import Historico from "./Historico";
import Ionicons from "react-native-vector-icons/Ionicons";

const tabs = [
  {
    id: 1,
    name: "Histórico",
    component: Historico,
    icon: "receipt-sharp",
  },
  {
    id: 2,
    name: "Perfil",
    component: Perfil,
    icon: "person-sharp",
  },
];

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#FBFBFB",
  },
  tabBarActiveTintColor: "#1365A0",
  tabBarInactiveTintColor: "#36444B",
};

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
