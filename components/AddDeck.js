import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, } from "react-native";

function AddDeck() {
return (
    <View>   
        <TouchableOpacity >
        <View style={styles.deck}>
            {/* <Text style={styles.title}>{title}</Text> */}
            <Text style={styles.title}>Deck 1</Text>
            {/* <Text style={styles.count}>{length} cards</Text> */}
            <Text style={styles.count}>73 cards</Text>
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
    </View>
)
};

export default AddDeck;

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
        //backgroundColor: "#D5C7BC", 
        backgroundColor: "#d9d9d9",
        borderRadius: 5,
        shadowColor:"#454545",
    },

  });