# Cards Project
Cards project, is a mobile application that allows users to study collections of flashcards. The app allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

# Specific Requirements
- Use create-react-native-app to build your project.
- Allow users to create a deck which can hold an unlimited number of cards.
- Allow users to add a card to a specific deck.
- The front of the card should display the question.
- The back of the card should display the answer.
- Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- Users should receive a notification to remind themselves to study if they haven't already for that day.

# Why this project?
This project encompasses the fundamental aspects of building a native application including:
- handling infinite lists, 
- routing, 
- user input. 

# Launch app

- install project dependencies with `npm install`.
- start the development server with `expo start`
- use the expo app on your mobile device

Note: this app was developed for iOS only 

# Data
App use AsyncStorage and Redux to store decks and flashcards. 

```
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```