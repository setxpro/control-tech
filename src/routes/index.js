import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../screens/favorites";
import { Home } from "../screens/home";
import Profile from "../screens/profile";
import Search from "../screens/search";

import { Ionicons } from "@expo/vector-icons";
import Expense from "../screens/expense";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFF", // toggle color on the icon active
        tabBarInactiveTintColor: "#FFF", // toggle color inactive
        tabBarShowLabel: false, // remove label under the icon
        tabBarStyle: {
          // styles tabBar
          backgroundColor: "#8000FF",
          borderTopWidth: 0, // remove border

          position: "absolute",
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 10,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false, // remove header
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: "#8000FF",
            
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }

            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // headerShown: false, // remove header
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: "#8000FF",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            }

            return <Ionicons name="search-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Expense"
        component={Expense}
        options={{
          headerShown: false, // remove header
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="wallet" size={size} color={color} />;
            }

            return <Ionicons name="wallet-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // headerShown: false, // remove header
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: "#8000FF",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }

            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          // headerShown: false, // remove header
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: "#8000FF",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="bookmark" size={size} color={color} />;
            }

            return (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
