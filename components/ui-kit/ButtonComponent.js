import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

export const ButtonComponent = ({ name, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[styles.ButtonContainer, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.ButtonText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    width: "100%",
    height: 47,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    elevation: 4,
  },

  ButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },

  // box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.25);
});
