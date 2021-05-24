import React from "react";
import { Text, View, Button, TextInput ,SafeAreaView, StyleSheet, } from "react-native";

function AddCard( navigation, route ) {
    return (
        <View>
            <View style={styles.topTextContainer}>
                <Text style={styles.topText}>
                Enter in the question and the answer, save the new question.
                </Text>
            </View>

            <View style={styles.deck}>
                <Text style={styles.title}>Deck 1</Text>
                <SafeAreaView style={styles.inputConteiner}>    
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeText}
                        // value={text}
                        placeholder="Card Question"
                    />
                </SafeAreaView>

                <SafeAreaView style={styles.inputConteiner}>    
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeText}
                        // value={text}
                        placeholder="Card Answer"
                    />
                </SafeAreaView>
            </View>

            <View style= {styles.button}>
                <Button
                    title="Save"
                    color= "#464646"
                    onPress={() => Alert.alert('Save')}
                /> 
            </View>
            
      </View>  
    )
}
export default AddCard;

// -------------Styles------------------------
const styles = StyleSheet.create({
    deck: {
      backgroundColor: "#93B7BE",
      padding: 20,
      marginVertical: 16,
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

    input: {
        height: 60,
        padding: 10,
        borderWidth: 0.7,
        borderRadius: 5,
        backgroundColor: "#ffffff"
      },

      inputConteiner:{
        marginVertical: 10,
      },

  });