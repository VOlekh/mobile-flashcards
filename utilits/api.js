import AsyncStorage from '@react-native-async-storage/async-storage';

// initial Data:
export const dummy_initial_data = {
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is JavaScript?",
        answer: "JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language",
      },
      {
        question: "What is the use of isNaN function?",
        answer: "isNan function returns true if the argument is not a number; otherwise, it is false.",
      },
    ],
  },
  React: {
    title: "React",
    questions: [
      {
        question: "Explain React in simple terms",
        answer:
          "React is a JavaScript library developed by Facebook in the year 2011. It became open-source in 2015, gaining popularity among a community of individual developers and companies. React comes handy in the development of complex and interactive mobile and web UI. It uses a component-based approach for building reusable components.",
      },
    ],
  },
};

const CARDS_STORAGE_KEY = "MobileFlashcards:decks";

export const getDecksAsync = async () => {
  try {
    console.log("getDecksAsync!");
    //AsyncStorage.clear();
    const value = await AsyncStorage.getItem(CARDS_STORAGE_KEY);
    if (value !== null) {
      console.log("We have data!");
      value = await JSON.parse(value);
      return value;
    } else {
      console.log("Here!");
      return dummy_initial_data;
    }
  } catch (e) {
     // Error retrieving data
    return dummy_initial_data;
  }
};

// export function getDecksAsync () {
//   AsyncStorage.clear()
//   return AsyncStorage.getItem(CARDS_STORAGE_KEY)
//   .then(formatResults)
// }

// export function formatResults (results) {
//   return results === null
//     ? setDefaultObjectShape()
//     : returnNonEmpty(JSON.parse(results))
// }
// function returnNonEmpty (deckObject) {
//   const length = Object.keys(deckObject).length
//   const timestamp = Date.now()
//   return dummy_initial_data;
// }

// function setDefaultObjectShape () {
//   let deckData = getDecksInfo()
//   const timestamp = Date.now()
//   AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(deckData))
//   return dummy_initial_data;
// }

// return the deck based on title
export const getDeck = async (deck) => {
  const value = await AsyncStorage.getItem(CARDS_STORAGE_KEY);
  return JSON.parse(value)[deck];
};

export const addDeck = async (title) => {
  const savedDeck = JSON.stringify({
    [title]: { title: title, questions: [] },
  });
  await AsyncStorage.mergeItem(CARDS_STORAGE_KEY, savedDeck);
  return JSON.parse(savedDeck);
};

export const addCard = async (title, question) => {
  const value = await AsyncStorage.getItem(CARDS_STORAGE_KEY);
  const data = JSON.parse(decks);
  const deck = data[title];
  deck.questions.push(newCard);
  const newDeck = { [title]: deck };
  return await AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify(newDeck)
  );
};

export const deleteDeck = async (deck) => {
  const results = await AsyncStorage.getItem(CARDS_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[deck];

    await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data));
    return data;
  }
  return {};
};

