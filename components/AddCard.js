import React, { useState} from "react";
import { Text, View, Button, TextInput ,SafeAreaView, Alert, StyleSheet, } from "react-native";
import { connect } from "react-redux";
import {addCardAsync} from "../utilits/api"
import {addCard} from "../actions/index";
import { useDispatch } from "react-redux";

function AddCard(props) {
 
  const [question, setTextQuestion] = useState("");
  const [answer, setTextAnswer] = useState("");

 // const { deck } = route.params;
  const dispatch = useDispatch();
  const {navigation, route} = props;
  const title = route.params.id;
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const newCard = {
        question,
        answer
      };
      // save to DB(actions) after asynk addCardAsync gave response with newDeck
      addCardAsync(title, newCard).then(() => dispatch(addCard(title, newCard)));
      navigation.navigate('Home', { name: 'Home' });
  };


      return (
          <View>
              <View style={styles.topTextContainer}>
                  <Text style={styles.topText}>
                  Enter in the question and the answer, save the card.
                  </Text>
              </View>

              <View style={styles.deck}>
                  <Text style={styles.title}>{title}</Text>
                  <SafeAreaView style={styles.inputConteiner}>    
                      <TextInput
                          style={styles.input}
                          onChangeText={question => setTextQuestion(question)}
                          defaultValue={question}
                          placeholder="Card Question"
                      />
                  </SafeAreaView>

                  <SafeAreaView style={styles.inputConteiner}>    
                      <TextInput
                          style={styles.input}
                          onChangeText={answer => setTextAnswer(answer)}
                          defaultValue={answer}
                          placeholder="Card Answer"
                      />
                  </SafeAreaView>
              </View>

              <View style= {styles.button}>
                  <Button
                      title="Save"
                      color= "#464646"
                      onPress={handleSubmit}
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