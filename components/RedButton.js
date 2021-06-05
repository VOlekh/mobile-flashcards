import React from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";

function RedButton({ children, onPress}) {
  return (
    <TouchableOpacity style= {styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

    text:{
        fontSize: 18,
        padding: 8,
        color: "#464646",
        textAlign:  "center",
    },

    button: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d5c7bd",
        borderRadius: 5,
        shadowColor:"#454545",
    },
});

export default RedButton;