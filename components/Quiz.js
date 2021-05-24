import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";

function Quiz({ navigation, route }) {
    return (
        <View style={styles.conteiner}>

            <TouchableOpacity>
                <View style={styles.deck}>
                    <Text style={styles.title}>Deck 1</Text>
                    <Text>TBD: the number of cards left in the quiz</Text>

                    <View style={styles.question}>
                        <Text style={styles.count}>question text text text 111111111111111111111111111111111111111111111111111111111111111111111111111111111111</Text>
                    </View>

                    <Button
                    title="Flip"
                    color= "#464646"
                    /> 
                </View>
            </TouchableOpacity>

            <View style= {styles.button}>
                <Button
                    title="Correct"
                    color= "#464646"
                /> 
                 
            </View>

            <View style= {styles.buttonIncorrect}>
                <Button
                    title="Incorrect"
                    color= "#464646"
                /> 
             </View>    
            
      </View>  
    )
}
export default Quiz;

// -------------Styles------------------------
const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
      },

    deck: {
        backgroundColor: "#93B7BE",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        alignItems: "center",
    },

    question: {
        backgroundColor: "#ffffff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        alignItems: "center",
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

    buttonIncorrect:{
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d5c7bd",
        borderRadius: 5,
        shadowColor:"#785964",
    },

  });