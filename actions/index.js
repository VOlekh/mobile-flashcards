export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";
export const DELETE_CARD = "DELETE_CARD";

export function receiveDecks (decks) {
    //console.log("receiveDecks")
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(deck) {
    return {
      type: ADD_DECK,
      deck,
    };
  }
  
  export function addCard(title, newCard) {
    return {
      type: ADD_CARD,
      title,
      newCard
    };
  }
  
  export function deleteDeck(deck) {
    return {
      type: DELETE_DECK,
      deck,
    };
  }

  export function deleteCard(deckTitle, question) {
    return {
      type: DELETE_CARD,
      title,
      question,
    };
  }