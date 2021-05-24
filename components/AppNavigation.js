
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import IndividualDeck from "./IndividualDeck";
import Quiz from "./Quiz";
// import AddCard from "./AddCard";

{/* https://reactnavigation.org/docs/tab-based-navigation */}

const Stack = createStackNavigator();

function AppNavigation() {
  return (   
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="IndividualDeck" component={IndividualDeck} />
            <Stack.Screen name="Quiz" component={Quiz} />
            {/* <Stack.Screen name="AddCard" component={AddCard}/>         */}
        </Stack.Navigator>
  );
};

export default AppNavigation;