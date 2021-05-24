import React from "react";
import { Text, View,  TouchableOpacity, StyleSheet, } from "react-native";

function DeckList({navigation}) 
{
return (
  <View>
  
      <View style={styles.topTextContainer}>
        <Text style={styles.topText}>Study collections of flashcards, create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.</Text>
      </View> 

    <TouchableOpacity
        onPress={() =>
          navigation.navigate('IndividualDeck', { name: 'IndividualDeck' })
        }
    >
      <View style={styles.deck}>
          {/* <Text style={styles.title}>{title}</Text> */}
          <Text style={styles.title}>Deck 1</Text>
          {/* <Text style={styles.count}>{length} cards</Text> */}
          <Text style={styles.count}>73 cards</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.deck}>
          {/* <Text style={styles.title}>{title}</Text> */}
          <Text style={styles.title}>Deck 2</Text>
          {/* <Text style={styles.count}>{length} cards</Text> */}
          <Text style={styles.count}>52 cards</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.deck}>
          {/* <Text style={styles.title}>{title}</Text> */}
          <Text style={styles.title}>Deck 3</Text>
          {/* <Text style={styles.count}>{length} cards</Text> */}
          <Text style={styles.count}>2 cards</Text>
      </View>
    </TouchableOpacity>

  </View>
  );

}

export default DeckList;

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

});