
import React, { useState} from "react";
import { Text, View, Button, TextInput, StyleSheet, SafeAreaView, } from "react-native";
import{addDeckAsync} from "../utilits/api"
import { addDeck } from "../actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";



function AddDeck(props) {
    const [title, setText] = useState('');
    const dispatch = useDispatch();
    const {navigation} = props;

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // save to DB(actions) after asynk addDeckAsync gave response with newDeck
        addDeckAsync(title).then((newDeck) => dispatch(addDeck(newDeck)));
        navigation.navigate('Home', { name: 'Home' });
    };


    return (
        <View> 
            <View style={styles.topTextContainer}>
                <Text style={styles.topText}>
                    What is the title of your new deck?
                </Text>
            </View>

            <View style={styles.deck} >

            <SafeAreaView style={styles.inputConteiner}>
    
                <TextInput
                    style={styles.input}
                    //onChangeText={(title) => { this.setState({ title: title})}}
                    onChangeText={title => setText(title)}
                    defaultValue={title}
                    maxLength={50}
                    placeholder="Deck Title"
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

export default AddDeck;

// -------------Styles------------------------
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#464646",
      },

    deck: {
        backgroundColor: "#93B7BE",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        // alignItems: "center",
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
        borderRadius: 5,
        backgroundColor: "#ffffff",
      },

      inputConteiner:{
        marginVertical: 20,
        marginHorizontal: 8,
      },

  });