import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import robotImg from "../../assets/imgs/chatbot.png";
import { ButtonComponent } from "../ui-kit/ButtonComponent";

export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>
        <Text style={styles.TitleSpan}>Words</Text>
        {"\n"}Pocket
      </Text>
      <Image source={robotImg} style={{ width: 340, height: 400 }} />

      <Text style={styles.Text}>
        For English learners. Create your own flashcards and repeat them.
      </Text>

      <View style={styles.Button}>
        <ButtonComponent
          name="Start"
          color="#023E8A"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: 40,
    color: "#C1C1C1",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: 20,
  },
  TitleSpan: {
    color: "#0096C7",
    fontWeight: "bold",
  },
  Button: {
    marginTop: 20,
    width: 210,
  },
  Text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    width: 230,
    fontWeight: "normal",
    color: "#0096C7",
  },
});
