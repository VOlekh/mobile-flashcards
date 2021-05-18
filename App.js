import React from "react";
import {StyleSheet,  Text,  View,   Platform, TouchableOpacity, StatusBar} from "react-native";
// import AddDeck from "./components/AddDeck";
// import DecksList from "./components/DecksList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import Button from 'react-native-button';
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import Deck from "./components/IndividualDeck";
// import Quiz from "./components/Quiz";
// import { FontAwesome, Entypo } from '@expo/vector-icons';
// import { setLocalNotification } from './utils/helpers';
// import Constants from "expo-constants";
// import { purple, white } from './utilits/colors'


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

export default class App extends React.Component {
  componentDidMount() {
    // setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View styles={styles.container}>

            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>

            <Button
              containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
              disabledContainerStyle={{backgroundColor: 'grey'}}
              style={{fontSize: 20, color: 'green'}}>
              Press me!
            </Button>


            <TouchableOpacity>
              <View style={styles.deck}>
                  {/* <Text style={styles.title}>{title}</Text> */}
                  <Text style={styles.title}>Deck 1</Text>
                  {/* <Text style={styles.count}>{length} cards</Text> */}
                  <Text > 52 cards</Text>
               </View>
            </TouchableOpacity>

            
            <TouchableOpacity>
              <View style={styles.deck}>
                  {/* <Text style={styles.title}>{title}</Text> */}
                  <Text style={styles.title}>Deck 2</Text>
                  {/* <Text style={styles.count}>{length} cards</Text> */}
                  <Text>52 cards</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.deck}>
                  {/* <Text style={styles.title}>{title}</Text> */}
                  <Text style={styles.title}>Deck 3</Text>
                  {/* <Text style={styles.count}>{length} cards</Text> */}
                  <Text>3 cards</Text>
               </View>
            </TouchableOpacity>

        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor : '#b93fb3',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#f0f",
 
  },
});
