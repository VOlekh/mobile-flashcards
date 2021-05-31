import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";
import { connect } from "react-redux";
import * as Progress from 'react-native-progress';
import {Surface, Shape} from '@react-native-community/art';
//https://snack.expo.io/embedded/@jiepeng/react-native-counter?preview=true&platform=ios&iframeId=zse3f2nh3y&theme=light


class Quiz extends Component  {

    
    state = { countCorrect:0, countIncorrect:0, currentCardId:0, isQuestionShown:true}

    //Correct
    setCountCorrect = () => this.setState(
        prevState => ({ ...prevState, countCorrect: this.state.countCorrect + 1 , currentCardId: this.state.currentCardId + 1 , isQuestionShown:true})
    )

    //Incorrrect
    setCountIncorrect = () => this.setState(
        prevState => ({ ...prevState, countIncorrect: this.state.countIncorrect + 1, currentCardId: this.state.currentCardId + 1 , isQuestionShown:true})
    )


    flipQuestionAnswer  = () =>  this.setState(
        prevState => ({ ...prevState,  isQuestionShown:false})
    )

   
    //Restart
    restart = () => this.setState(
        prevState => ({ ...prevState,  currentCardId: 0, countCorrect:0, countIncorrect:0})
    )



    render(){  
        const {countCorrect, countIncorrect, currentCardId, isQuestionShown} = this.state;
        let { navigation, questions, deck} = this.props;
        const questionsLength = questions.length;
        const percentCorrect = 100/questions.length*countCorrect;
        const percentCorrectBar= percentCorrect/100


//Displays the percentage correct, once the quiz is complete
        if (questions.length === currentCardId) {
            return (
              <View style={styles.container}>

                    <View style={styles.topTextContainer}> 
                       
                            <View>
                                {percentCorrect > 50 
                                    ?  <Text style={styles.topText}>Congrats, you have finished the Quiz with the following result:</Text> 
                                    :  <Text style={styles.topText} >Do not give up, go through cards one more time to increase the result. </Text>
                                }
                            </View>
                          
                            <Text style={styles.topText}>Percent correct:  {percentCorrect}%</Text>                   
                            <Progress.Bar progress={percentCorrectBar} width={200} height={16} color="#93B7BE"  indeterminate={true} indeterminateAnimationDuration= {1000}/>
                            <Text style={styles.topText}>Correct: {countCorrect}</Text>
                            <Text style={styles.topText}>Incorrect: {countIncorrect}</Text>
                    </View>
                            
                    <View style= {styles.button}> 
                        <Button
                            title="Restart Quiz"
                            color= "#464646"
                            onPress={this.restart}
                        /> 
                    </View>

              </View>
            )
        }

//no cards situation
        if (questions.length === 0) {
            return (
              <View style={styles.container}>

                    <View style={styles.topTextContainer}> 
                        <Text style={styles.topText}>Sorry, no cards at that moments under current deck.</Text>
                    </View>
                            
                    <View style= {styles.button}> 
                        <Button
                            onPress={() =>
                                navigation.navigate('Home', { name: 'Home' })
                            }
                        /> 
                    </View>

              </View>
            )
        }



        return (
            <View style={styles.conteiner}>

                <TouchableOpacity>
                    <View style={styles.deck}>
                        <Text style={styles.title}>{deck.title}</Text>
                        <Text style={styles.topText}>Card {currentCardId+1} out of {questions.length}</Text>
                        <Text style={styles.topText}>Correct: {countCorrect}</Text>
                        <Text style={styles.topText}>Incorrect: {countIncorrect}</Text>
                        <Text style={styles.topText}>Total: {questions.length}</Text>

                        <View style={styles.question} key={questions[currentCardId]}>

                        {isQuestionShown
                                    ?   <Text style={styles.count}>{questions[currentCardId].question}</Text> 
                                    :   <Text style={styles.count}>{questions[currentCardId].answer}</Text>
                                }
                           

                        </View>

                        <Button
                            title="Flip"
                            color= "#464646"
                            onPress={this.flipQuestionAnswer }
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