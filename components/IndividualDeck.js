import React from "react";
import { Text, View, Button, TextInput , StyleSheet, } from "react-native";

function IndividualDeck() {
    return (
        <View>

            <TextInput
                label="Deck Title"
                mode="outlined"
                value={text}
                onChangeText={(event) => setText(event)}
            />

            <View style= {styles.button}>
                <Button
                    title="Start Quiz"
                    color= "#464646"
                    onPress={() => Alert.alert('Quiz to begin')}
                /> 
            </View>
            
      </View>  
    )
}
export default IndividualDeck;

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
      
    button: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d9d9d9",
        borderRadius: 5,
        shadowColor:"#454545",
    },

  });