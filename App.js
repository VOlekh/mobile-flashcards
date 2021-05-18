import React from "react";
import {StyleSheet,  Text,  View,   Platform, TouchableOpacity, StatusBar} from "react-native";
// import AddDeck from "./components/AddDeck";
// import DecksList from "./components/DecksList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import Button from 'react-native-button';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import Deck from "./components/IndividualDeck";
// import Quiz from "./components/Quiz";
// import { FontAwesome, Entypo } from '@expo/vector-icons';
// import { setLocalNotification } from './utils/helpers';
// import Constants from "expo-constants";
import { lightBlue, white } from './utilits/colors'


// function UdaciStatusBar({ backgroundColor, ...props }) {
//   return (
//     <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
//       <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//     </View>
//   );
// }

// const Tab =
//   Platform.OS === "ios"
//     ? createBottomTabNavigator()
//     : createMaterialTopTabNavigator();

// function Tabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Decks List"
//         tabBarOptions={{
//           labelPosition: "below-icon",
//           activeTintColor: Platform.OS === "ios" ? purple : white,
//           style: {
//             height: 56,
//             backgroundColor: Platform.OS === "ios" ? white : purple,
//             shadowColor: "rgba(0, 0, 0, 0.24)",
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             shadowRadius: 6,
//             shadowOpacity: 1,
//           }
//         }}
//       >
//         <Tab.Screen
//           name="Decks List"
//           component={DecksList}
//           options={{
//             tabBarLabel: "Decks List",
//             tabBarIcon: ({ color }) => (
//               <FontAwesome name="plus-square" size={30} color={color} />
//             )
//           }}/>

//         <Tab.Screen
//           name="Add Deck"
//           component={AddDeck}
//           options={{
//             tabBarLabel: "Add Deck",
//             tabBarIcon: ({ color }) => (
//               <Entypo name="add-to-list" size={30} color={color} />
//             )
//           }}
//           />
//       </Tab.Navigator>
//      </NavigationContainer>
//   );
// }

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
        <View styles={styles.container}>


            <Text styles={styles.appTitle}>Cards project</Text>
         

            <View styles={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>A mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.</Text>
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

       
{/* https://reactnavigation.org/docs/tab-based-navigation */}


            <NavigationContainer style={styles.navContainer}>
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

  appTitle:{
    fontSize: 60,
    fontWeight: 'bold',
    color: "#f0f",
  },

  bottomTextContainer: {
    padding: 20,
    marginVertical: 80,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",

  },

  bottomText:{
    fontSize: 16,
    color: "#464646",
  },

  
  navContainer: {
    backgroundColor: "#93B7BE",
  },
});
