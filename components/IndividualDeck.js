import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import deleteDeckAsync from "../utilits/api"
import { deleteDeck } from "../actions";


class IndividualDeck extends Component  {
  

    render(){
   
        const {navigation, deck} = this.props;
        
        const onDeleteDeck = (event) => {
            event.preventDefault();
            const {dispatch, navigation, deck } = this.props;
            dispatch(deleteDeck(deck));
            navigation.navigate('Home', { name: 'Home' });
            //deleteDeckAsync(deck);
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

                <View style= {styles.button}>
                    <Button
                        onPress={() =>
                            navigation.navigate('Quiz', { id: deck.title})
                        }
                        title="Start Quiz"
                        color= "#464646"
                    /> 
                </View>
                <View style= {styles.button}>
                    <Button
                        onPress={() =>
                            navigation.navigate('AddCard', { name: 'AddCard' })
                        }
                        title="Add Card"
                        color= "#464646"
                    /> 
                </View>

                <View style= {styles.buttonDelete}>
                    <Button
                        onPress={onDeleteDeck}
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