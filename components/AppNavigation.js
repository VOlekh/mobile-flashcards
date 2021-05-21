
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Text, View,  StyleSheet,  Platform,  TouchableOpacity,  FlatList} from "react-native";
//import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
// import BottomTabBar from "./BottomTabs";


import BottomTabs from "./BottomTabs";
// import IndividualDeck from "./IndividualDeck";
// import AddCard from "./AddCard";
// import Quiz from "./Quiz";
import DeckList from "./DecksList"


const Stack = createStackNavigator();

function AppNavigation() {
  return (   
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            {/* <Stack.Screen name="IndividualDeck"   component={IndividualDeck}/> */}
            {/* <Stack.Screen name="AddCard" component={AddCard}/>
            <Stack.Screen name="Quiz" component={Quiz}/> */}
            {/* <Stack.Screen name="Kva" component={DeckList}/> */}
        </Stack.Navigator>
  );
};

export default AppNavigation;