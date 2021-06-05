import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";
import { connect } from "react-redux";
import {deleteDeckAsync} from "../utilits/api"
import {deleteDeck} from "../actions/index";
import GrayButton from "./GrayButton"
import RedButton from "./RedButton"
import {
    clearLocalNotification,
    setLocalNotification
   } from "../utilits/helpers";


class IndividualDeck extends Component  {

    onDeleteDeck = (event) => {
        event.preventDefault();
        const { deck, dispatch } = this.props;
        deleteDeckAsync(deck).then ( () => dispatch(deleteDeck(deck)));
     }

    render(){
        const {navigation, deck} = this.props;
        console.log(deck);
        //deleted deck, it is undefined, app tryes to render screen with undefined value
        // avoid this with check (!deck)
        if (!deck)
        {
            navigation.navigate('Home', { name: 'Home' });
            return null;
           
        }
        
        clearLocalNotification()
        .then(setLocalNotification)

        return (
            <View style={styles.conteiner}>
                 <View style={styles.topTextContainer}>
          <Text style={styles.topText}>Study every day to prepare for the interview. Good luck!</Text>
        </View>

                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Quiz', { id: deck.title})
                    }
                     >
                    <View style={styles.deck}>
                        <Text style={styles.title}>{deck.title}</Text>
                        <Text style={styles.count}>{deck.questions.length} cards </Text>
                    </View>
                </TouchableOpacity>

                <GrayButton
                    onPress={() =>
                        navigation.navigate('Quiz', { id: deck.title})
                    }
                    title="Start Quiz"
                    disableValue = {deck.questions.length === 0}
                >
                    Start Quiz
                </GrayButton>
               
                <GrayButton
                    onPress={() => navigation.navigate('AddCard', { id: deck.title})}
                    title="Add Card"
                >
                    Add Card
                </GrayButton>

                <RedButton
                    onPress={this.onDeleteDeck}
                    title="Delete Deck"
                >
                    Delete Deck
                </RedButton>
                
        </View>  
        )
    };
}

function mapStateToProps(state, { route, navigation }) {
    const { id } = route.params;
    return {
        deck: state[id],
        navigation,
    };
}


export default connect(mapStateToProps) (IndividualDeck);

// -------------Styles------------------------
const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
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

    deck: {
      marginTop: 16,
      marginBottom:300,
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
      
  });