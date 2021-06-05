import React from "react";
import {Text, View,  StyleSheet} from "react-native";


export default class AppHeader extends React.Component  {
    render(){
        return(
            <View>
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
            </View>
        )
    };
};


const styles = StyleSheet.create({
appTitleContainer:{
    padding: 20,
    marginBottom: 7,
    marginTop:16,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
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
  }

});