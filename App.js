import React, { Component } from "react";
import {StyleSheet,  Button, Text,  View,   Platform, TouchableOpacity, StatusBar} from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import Deck from "./components/IndividualDeck";
// import Quiz from "./components/Quiz";
// import { FontAwesome, Entypo } from '@expo/vector-icons';
// import { setLocalNotification } from './utils/helpers';
// import Constants from "expo-constants";
// import { lightBlue, white } from './utilits/colors'
// import AddDeck from "./components/AddDeck";
// import DecksList from "./components/DecksList";
//<a href='https://pngtree.com/so/black-and-white'>black and white png from pngtree.com</a>

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function AddDack() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text >Add Deck!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  componentDidMount() {
    // setLocalNotification()
  }

  
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View >

            <View style={styles.appTitleContainer}>
              <Text style={styles.appTitle}>Cards project</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.line} />
                <View>
                <Text style={styles.appTitleSmall}> IT CARDS </Text>
                </View>
                <View  style={styles.line} />
            </View>

            <View style={styles.topTextContainer}>
              <Text style={styles.topText}>Study collections of flashcards, create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.</Text>
            </View>

            <TouchableOpacity >
              <View style={styles.deck}>
                  {/* <Text style={styles.title}>{title}</Text> */}
                  <Text style={styles.title}>Deck 1</Text>
                  {/* <Text style={styles.count}>{length} cards</Text> */}
                  <Text style={styles.count}>73 cards</Text>
               </View>
            </TouchableOpacity>

            
            <TouchableOpacity>
              <View style={styles.deck}>
                  {/* <Text style={styles.title}>{title}</Text> */}
                  <Text style={styles.title}>Deck 2</Text>
                  {/* <Text style={styles.count}>{length} cards</Text> */}
                  <Text style={styles.count}>52 cards</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.deck}>
                  {/* <Text style={styles.title}>{title}</Text> */}
                  <Text style={styles.title}>Deck 3</Text>
                  {/* <Text style={styles.count}>{length} cards</Text> */}
                  <Text style={styles.count}>2 cards</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style= {styles.button}>
              <Button
                  title="Add Card"
                  color= "#464646"
                  onPress={() => Alert.alert('Card added')}
                />
            </View>  
            
            <View style= {styles.button}>
              <Button
                  title="Start Quiz"
                  color= "#464646"
                  onPress={() => Alert.alert('Quiz to begin')}
                /> 
            </View>  


            </TouchableOpacity>


       
{/* https://reactnavigation.org/docs/tab-based-navigation */}


            <NavigationContainer style={styles.navConttainer}>
              <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let Home;
          
                      if (route.name === 'Home') {
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
                  <Tab.Screen name="Home" component={HomeScreen} />
                  <Tab.Screen name="AddDack" component={AddDack} />
            
              </Tab.Navigator>
            </NavigationContainer>
            

        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  deck: {
    backgroundColor: "#93B7BE",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
   // alignItems: "center",
  },

  navConttainer:{
   
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

  appTitleContainer:{
    padding: 20,
    marginBottom: 7,
    marginTop:80,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",

  
   // backgroundColor: "#40676E", 
  },

  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#93B7BE",
  },

  appTitleSmall: {
    fontSize: 15,
    color: "#93B7BE",
  },

  line:{
    flex: 1, 
    height: 0.7, 
    backgroundColor: "#bfbfbf"
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
