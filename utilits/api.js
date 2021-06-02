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
    const allDecks = await AsyncStorage.getItem(CARDS_STORAGE_KEY);

    if (!allDecks) {
      await AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(dummy_initial_data));
    }

    return allDecks ? JSON.parse(allDecks) : dummy_initial_data;
    
  } catch (err) {
    console.log('Error: ', err);
  }
};

// return the deck based on title
export const getDecks = async (deck) => {
  const value = await AsyncStorage.getItem(CARDS_STORAGE_KEY);
  return JSON.parse(value)[deck];
};

export const addDeckAsync = async (title) => {
  const newDeck = {
    [title]: { title: title, questions: [] },
  };
  await AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify(newDeck));
  return newDeck;
};

export const addCardAsync = async (title, question) => {
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

export const deleteDeckAsync = async (deck) => {
  const results = await AsyncStorage.getItem(CARDS_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[deck];

    await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data));
    return data;
  }
  return {};
};

