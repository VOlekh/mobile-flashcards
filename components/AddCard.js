import React from "react";
import { Text, View, Button, TextInput , StyleSheet, } from "react-native";

function AddCard() {
    return (
        <View>
            <View style={styles.topTextContainer}>
                <Text style={styles.topText}>
                    What is the title of your new deck?
                </Text>
            </View>

            <SafeAreaView style={styles.inputConteiner}>    
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Card Question"
                />
            </SafeAreaView>

            <SafeAreaView style={styles.inputConteiner}>    
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Card Answer"
                />
            </SafeAreaView>

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
        margin: 12,
        padding: 10,
        borderWidth: 0.7,
        borderRadius: 2,
      },

      inputConteiner:{
        marginVertical: 20,
        marginHorizontal: 40,
      },

  });