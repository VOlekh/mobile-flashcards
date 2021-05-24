import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import AppNavigation from "./components/AppNavigation";
//import AppHeader from "./components/Header";

import { NavigationContainer } from '@react-navigation/native';

//<a href='https://pngtree.com/so/black-and-white'>black and white png from pngtree.com</a>
{/* https://reactnavigation.org/docs/tab-based-navigation */}



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
      </Provider>
    );
  }
}
