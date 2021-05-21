import React, { Component } from "react";
import {StyleSheet,  Button, Text,  View,   Platform, TouchableOpacity, StatusBar} from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import AppNavigation from "./components/AppNavigation";
//import AppHeader from "./components/Header";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import Deck from "./components/IndividualDeck";
// import Quiz from "./components/Quiz";
// import { FontAwesome, Entypo } from '@expo/vector-icons';
// import { setLocalNotification } from './utils/helpers';
// import Constants from "expo-constants";
// import { lightBlue, white } from './utilits/colors'
// import AddDeck from "./components/AddDeck";
// import DecksList from "./components/DecksList";
//<a href='https://pngtree.com/so/black-and-white'>black and white png from pngtree.com</a>

// function DeckList() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function AddDeck() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text >Add Deck!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  componentDidMount() {
    // setLocalNotification()
  }

  
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
         <NavigationContainer>
            <AppNavigation />
         </NavigationContainer>
        
       
{/* https://reactnavigation.org/docs/tab-based-navigation */}
{/* 

            <NavigationContainer style={styles.navConttainer}>
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
            </NavigationContainer>
             */}

      </Provider>
    );
  }
}


// -------------Styles------------------------
const styles = StyleSheet.create({
  deck: {
    backgroundColor: "#93B7BE",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
   // alignItems: "center",
  },


  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#fff",
  },

  count: {
    fontSize: 16,
    color: "#464646",
  },


 

  topTextContainer: {
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#D5C7BC", 
    backgroundColor: "#d9d9d9",
    borderRadius: 5, 
  },


  topText:{
    fontSize: 16,
    color: "#464646",
    fontStyle: "italic",
    textAlign:  "center",
  },

  
 button: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#D5C7BC", 
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    shadowColor:"#454545",
  },




});
