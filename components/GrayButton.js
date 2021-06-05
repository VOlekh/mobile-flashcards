import React from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";

function GrayButton({ children, onPress, disableValue}) {
  return (
    <TouchableOpacity style= {styles.button}
      onPress={onPress}
      disabled={disableValue}
      activeOpacity={disableValue ? 1 : 0.5}
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
        backgroundColor: "#d9d9d9",
        borderRadius: 5,
        shadowColor:"#454545",
    },
});

export default GrayButton;