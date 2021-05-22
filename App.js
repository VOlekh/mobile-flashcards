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
