import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";

function IndividualDeck({ navigation, route }) {
    return (
        <View style={styles.conteiner}>

            <TouchableOpacity>
                <View style={styles.deck}>
                    {/* <Text style={styles.title}>{title}</Text> */}
                    <Text style={styles.title}>Deck 1</Text>
                    {/* <Text style={styles.count}>{length} cards</Text> */}
                    <Text style={styles.count}>XX cards</Text>
                </View>
            </TouchableOpacity>

            <View style= {styles.button}>
                <Button
                    onPress={() =>
                        navigation.navigate('Quiz', { name: 'Quiz' })
                    }
                    title="Start Quiz"
                    color= "#464646"
                    // onPress={() => Alert.alert('Quiz to begin')}
                /> 
            </View>
            
      </View>  
    )
}
export default IndividualDeck;

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