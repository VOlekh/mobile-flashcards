import React, { Component } from "react";
import { Text, View,  TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { getDecksAsync  } from "../utilits/api";
import { receiveDecks } from "../actions/index";
import { connect } from "react-redux";



class DecksList extends Component  {

  componentDidMount() {
    console.log("Did mount");
    let { dispatch } = this.props;
    getDecksAsync().then((decks) => dispatch(receiveDecks(decks)));
  }
   
  render(){
    let { navigation, decksList} = this.props;
    console.log(decksList);
    return (
      <View>
      
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>Study collections of flashcards, create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.</Text>
        </View>

        <ScrollView>
          {decksList.map((deck) => {
              return (
                <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('IndividualDeck', { name: 'IndividualDeck' })
                    }
                >
                  <View style={styles.deck}>
                      <Text style={styles.title}>{deck.title}</Text>
                      {/* <Text style={styles.count}> {decksList[0].questions.length} </Text> */}
                  </View>
                </TouchableOpacity>
              )})
          }       
        </ScrollView>

      </View>
      );
  }
}

function mapStateToProps(state) {
  const decksList = Object.values(state);
  console.log(decksList);
  return {
    decksList
  };
}

export default connect(mapStateToProps)(DecksList);


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