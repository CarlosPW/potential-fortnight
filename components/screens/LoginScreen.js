import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ArrowLeft from "../../assets/icons/arrow-left.png";
import GoogleLogo from "../../assets/imgs/google.png";
import { ButtonComponent } from "../ui-kit/ButtonComponent";

export const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.TitleContainer}>
        <Text style={styles.WordsText}>Words</Text>
        <Text style={styles.PocketText}>Pocket</Text>
      </View>

      <TouchableOpacity
        style={styles.ArrowLeft}
        onPress={() => navigation.goBack()}
      >
        <Image source={ArrowLeft} />
      </TouchableOpacity>

      <Image source={GoogleLogo} style={styles.GoogleLogo} />

      <Text style={styles.Text}>Log in with your Google Account</Text>

      <View style={styles.Button}>
        <ButtonComponent name="Login" color="#023E8A" />
      </View>
      <View style={styles.Button}>
        <ButtonComponent name="Cancel" color="#EC615B" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    flex: 1,
  },
  TitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  PocketText: {
    fontSize: 14,
    color: "#C1C1C1",
  },
  WordsText: {
    color: "#0096C7",
    fontWeight: "bold",
    fontSize: 14,
  },
  ArrowLeft: {
    width: 24,
    height: 24,
    marginHorizontal: 40,
    marginTop: 20,
  },

  GoogleLogo: {
    alignSelf: "center",
    width: 130,
    height: 130,
  },

  Text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 55,
    width: 210,
    fontWeight: "normal",
    color: "#0096C7",
    marginBottom: 50,
  },
  Button: {
    alignSelf: "center",
    marginTop: 20,
    width: 220,
  },
});
