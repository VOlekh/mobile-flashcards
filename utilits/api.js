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
  HTML: {
    title: "HTML",
    questions: [
      {
        question: "What is HTML?",
        answer:
          "HTML stands for Hyper Text Markup Language. It is a language of the World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. HTML makes the text more interactive and dynamic. It can turn text into images, tables, links. HTML pages are saved by adding .html or .html in web page name.",
      },
      {
        question: " What are Attributes and how do you use them?",
        answer:
          "Attributes are specified directly after the name of the tag, inside the two angled brackets. They should only ever appear in opening tags or in self-closing tags. But, they can never be in closing tags.",
      },
      {
        question: "What is the difference between DIV and SPAN in HTML?",
        answer:
          "The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line,such as inside a paragraph. Whereas, a div or division element is block-line which is equivalent to having a line-break before and after it and used to group larger chunks of code."
      },
    ],
  },
  ReactNative: {
    title: "React Native",
    questions: [
      {
        question: "Can we combine Android or iOS code in react native?",
        answer:
          "Yes, we can combine Android or iOS code in react native. ",
      },
      {
        question: "What is the difference between React and React Native?",
        answer:
          "React is a JavaScript library, supporting front-end web and being run on a server, for web applications and building user interfaces.	React Native is a framework that compiles to native app components, allowing you to build native mobile applications for different platforms.	React Js is a Javascript Library where you can develop and run faster web applications.	React-Native is a framework where you can develop mobile applications.	React is for websites.	React Native is for mobile applications. ",
      },
      {
        question: "What are the advantages of using React Native?",
        answer:
          " Conveniently uses the client as well as server side. Superbly cost effective and code reuse.  Better code readability because of JSX use.  Easy to integrate with other significant frameworks. Easy to write UI test cases because of React"
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

export const addCardAsync = async (title, newCard) => {
  const data = await AsyncStorage.getItem(CARDS_STORAGE_KEY);
  const decks = JSON.parse(data);
  const deck = decks[title];
  deck.questions.push(newCard);
  const newDeck = { [title]: deck };
  await AsyncStorage.mergeItem(
    CARDS_STORAGE_KEY,
    JSON.stringify(newDeck)
  );
};

export const deleteDeckAsync = async (deck) => {
  const results = await AsyncStorage.getItem(CARDS_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[deck.title];
    // console.log("deleteAsync");
    // console.log(data);
    await AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data));
    return data;
  }
  return {};
};

