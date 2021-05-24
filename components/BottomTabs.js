
import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DeckList from "./DecksList"
import AddDeck from "./AddDeck"

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
    <Tab.Navigator
        initialRouteName="Home"
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let Home;

                if (route.name === 'DeckList') {
                Home = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                } else if (route.name === 'AddDack') {
                Home = focused 
                    ? 'ios-add-circle' 
                    : 'ios-add-circle-outline';
                }
                return <Ionicons name={Home} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
                activeTintColor:"#464646",
                inactiveTintColor: "#93B7BE",
            }}
     >
        <Tab.Screen name="Home" component={DeckList} />
        <Tab.Screen name="AddDeck" component={AddDeck} />
        
    
    </Tab.Navigator>
  );

}

export default BottomTabs;