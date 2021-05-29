import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";
import { connect } from "react-redux";
//https://www.linkedin.com/pulse/how-develop-counter-app-react-native-floating-button-mahmud-ahsan/

class Quiz extends Component  {
    state = { countCorrect: 0}
    setCountCorrect = () => this.setState(
    prevState => ({ ...prevState, countCorrect: this.state.countCorrect + 1 })
  )
    render(){  
        const {countCorrect} = this.state;
        let { navigation, route, deck} = this.props;
        return (
            <View style={styles.conteiner}>

                <TouchableOpacity>
                    <View style={styles.deck}>
                        <Text style={styles.title}>Deck 1</Text>
                        <Text>TBD: the number of cards left in the quiz</Text>
                        <Text >correctCounter: {countCorrect}</Text>

                        <View style={styles.question}>
                            <Text style={styles.count}>question text text text 111111111111111111111111111111111111111111111111111111111111111111111111111111111111</Text>
                        </View>

                        <Button
                            title="Flip"
                            color= "#464646"
                        /> 
                    </View>
                </TouchableOpacity>

                
{/* TBD: rebuild button with TouchableOpacity */}
                <View style= {styles.button}>
                    <Button
                        onPress={this.setCountCorrect}
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

    onCorrect(){
        this.setState({counter: this.state.counter + 1});
    }
} 

function mapStateToProps(state, { route, navigation }) {
    const { id } = route.params;
    return {
        deck: state[id],
        //questions: state[id].questions,
        navigation,
    };
}
  
export default connect(mapStateToProps)(Quiz);

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