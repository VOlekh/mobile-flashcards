<View >
  <View style={styles.topTextContainer}>
    <Text style={styles.topText}>Study collections of flashcards, create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.</Text>
  </View>

  <TouchableOpacity >
    <View style={styles.deck}>
        {/* <Text style={styles.title}>{title}</Text> */}
        <Text style={styles.title}>Deck 1</Text>
        {/* <Text style={styles.count}>{length} cards</Text> */}
        <Text style={styles.count}>73 cards</Text>
     </View>
  </TouchableOpacity>

  
  <TouchableOpacity>
    <View style={styles.deck}>
        {/* <Text style={styles.title}>{title}</Text> */}
        <Text style={styles.title}>Deck 2</Text>
        {/* <Text style={styles.count}>{length} cards</Text> */}
        <Text style={styles.count}>52 cards</Text>
     </View>
  </TouchableOpacity>

  <TouchableOpacity>
    <View style={styles.deck}>
        {/* <Text style={styles.title}>{title}</Text> */}
        <Text style={styles.title}>Deck 3</Text>
        {/* <Text style={styles.count}>{length} cards</Text> */}
        <Text style={styles.count}>2 cards</Text>
     </View>
  </TouchableOpacity>

  <TouchableOpacity>
  <View style= {styles.button}>
    <Button
        title="Add Card"
        color= "#464646"
        onPress={() => Alert.alert('Card added')}
      />
  </View>  
  
  <View style= {styles.button}>
    <Button
        title="Start Quiz"
        color= "#464646"
        onPress={() => Alert.alert('Quiz to begin')}
      /> 
  </View>  
  </TouchableOpacity>
  </View> 