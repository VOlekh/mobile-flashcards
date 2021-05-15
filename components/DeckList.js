import React, { useEffect, useRef } from "react";
import {  View,  Text,  StyleSheet,  Platform,  TouchableOpacity,  FlatList,} from "react-native";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PropTypes from 'prop-types';
import { blue, white } from './utils/colors'




const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        marginLeft: 30
    },
    deck: {
        backgroundColor: blue,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    deckTitle: {
        fontSize: 30,
        color: white,
        textAlign: "center",
      },
    deckCardsCount: {
        fontSize: 15,
        color: white,
        textAlign: "center",
      },  
  })
  

function mapStateToProps (state) {
    const key = timeToString();
    return {
        decks,
      }
    }
    

export default connect(mapStateToProps)(DeckList);