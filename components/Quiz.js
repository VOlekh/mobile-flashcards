import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";
import { connect } from "react-redux";
//https://www.linkedin.com/pulse/how-develop-counter-app-react-native-floating-button-mahmud-ahsan/

class Quiz extends Component  {

    //Correct
    state = { countCorrect: 0, countIncorrect: 0, currentCardId:0}
    setCountCorrect = () => this.setState(
        prevState => ({ ...prevState, countCorrect: this.state.countCorrect + 1 , currentCardId: this.state.currentCardId + 1 })

    )

    //Incorrrect
    setCountIncorrect = () => this.setState(
        prevState => ({ ...prevState, countIncorrect: this.state.countIncorrect + 1, currentCardId: this.state.currentCardId + 1 })
    )



    render(){  
        const {countCorrect, countIncorrect, currentCardId} = this.state;
        let { navigation, questions, deck} = this.props;
        const questionsLength = questions.length;
        return (
            <View style={styles.conteiner}>

                <TouchableOpacity>
                    <View style={styles.deck}>
                        <Text style={styles.title}>{deck.title}</Text>
                        <Text >card {currentCardId+1} out of {questions.length}</Text>
                        <Text >Correct: {countCorrect}</Text>
                        <Text >Incorrect: {countIncorrect}</Text>
                        <Text >Total: {questions.length}</Text>

                        <View style={styles.question} key={questions[currentCardId]}>
                            <Text style={styles.count}>{  questions[currentCardId].question}</Text>
                        </View>

                        <Button
                            title="Flip"
                            color= "#464646"
                            onPress={this.setFlip}
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
                        onPress={this.setCountIncorrect}
                        title="Incorrect"
                        color= "#464646"
                    /> 
                </View>    
                
        </View>  
        )
    }
} 

function mapStateToProps(state, { route, navigation }) {
    const { id } = route.params;
    console.log('State: ', state[id])

    return {
        deck: state[id],
        questions: state[id].questions,
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