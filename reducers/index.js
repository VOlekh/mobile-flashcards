  
import {RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK, DELETE_CARD } from "../actions";


export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
        return {
            ...action.decks,
        };
    case ADD_DECK:
        return {
            ...state,
            ...action.deck,
        };
    case ADD_CARD:
        return {
            ...state,
            [action.deck.title]: {
            ...state[action.deck.title],
            questions: [...state[action.deck.title].questions, action.question],
            },
        };
    case DELETE_DECK:
        const newState = Object.assign({}, state);
        console.log("delete from state");
        delete newState[action.deck.title];
        // console.log(newState);
        console.log("Delete_Deck");
        return newState;
    default:
        return state;

    // case DELETE_CARD:
    //     const newState = Object.assign({}, state);
    //     delete newState[action.deckTitle]
    //   return {
    //     ...state,
    //     [action.title]: {
    //         ...state[action.deckTitle],
    //     questions: [...state[action.deckTitle].questions, action.question],
    //       },
    //     };  
  }
}