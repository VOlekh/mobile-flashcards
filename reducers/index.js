  
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
            [action.title]: {
            ...state[action.title],
            questions: [...state[action.title].questions, action.newCard],
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
  }
}