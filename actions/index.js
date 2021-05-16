export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";
export const DELETE_CARD = "DELETE_CARD";

export function receiveDecks (decks) {
    //console.log("receiveDecks")
  return {
    type: RECEIVE_DECKSS,
    decks,
  }
}

export function addDeck(deck) {
    return {
      type: ADD_DECK,
      deck,
    };
  }
  
  export function addCard(deckTitle, question) {
    return {
      type: ADD_CARD,
      deckTitle,
      question,
    };
  }
  
  export function deleteDeck(deckTitle) {
    return {
      type: DELETE_DECK,
      deckTitle,
    };
  }
  
  export function deleteCard(deckTitle, question) {
    return {
      type: DELETE_CARD,
      deckTitle,
      question,
    };
  }