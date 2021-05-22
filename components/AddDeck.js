import React from "react";
import { Text, View, Button, TextInput, StyleSheet, SafeAreaView, } from "react-native";



function AddDeck() {
        const [text, onChangeText] = React.useState("Deck Title");
 
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
                placeholder="Deck Title"
                
            />
        </SafeAreaView>

        
        <View style= {styles.button}>
            <Button
                title="Start Quiz"
                color= "#464646"
                onPress={() => Alert.alert('Quiz to begin')}
            /> 
        </View>


    </View>
)
};

export default AddDeck;

// -------------Styles------------------------
const styles = StyleSheet.create({
    text: {
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