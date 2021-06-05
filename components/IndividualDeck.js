import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";
import { connect } from "react-redux";
import {deleteDeckAsync} from "../utilits/api"
import {deleteDeck} from "../actions/index";
import AppButton from "./AppButton"


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
                        {/* <Text style={styles.title}>{title}</Text> */}
                        <Text style={styles.title}>{deck.title}</Text>
                        {/* <Text style={styles.count}>{length} cards</Text> */}
                        <Text style={styles.count}>{deck.questions.length} cards </Text>
                    </View>
                </TouchableOpacity>

                <AppButton
                    onPress={() =>
                        navigation.navigate('Quiz', { id: deck.title})
                    }
                    title="Start Quiz"
                    color= "#464646"
                    disabled={deck.questions.length === 0}
                >
                    Start Quiz
                </AppButton>
               
                <AppButton
                    onPress={() => navigation.navigate('AddCard', { id: deck.title})}
                    title="Add Card"
                >
                    Add Card
                </AppButton>

                <View style= {styles.buttonDelete}>
                    <Button
                        onPress={this.onDeleteDeck}
                        title="Delete Deck"
                        color= "#464646"
                    /> 
                </View>
                
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

    buttonDelete:{
    
        marginVertical: 20,
        padding: 10,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d5c7bd",
        borderRadius: 5,
        shadowColor:"#785964",
    }

  });