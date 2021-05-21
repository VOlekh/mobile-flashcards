
import React from "react";
import { SafeAreaView, Text, View,  StyleSheet,  Platform,  TouchableOpacity,  FlatList} from "react-native";
import { connect } from "react-redux";
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


function DeckList() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function AddDeck() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text >Add Deck!</Text>
      </View>
    );
  }


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