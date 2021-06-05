import React from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

function AppButton({ children, onPress}) {
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
        backgroundColor: "#d9d9d9",
        borderRadius: 5,
        shadowColor:"#454545",
    },
});

export default AppButton;