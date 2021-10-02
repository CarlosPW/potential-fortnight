import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import UserIcon from "../../assets/icons/user.png";
import { StateContext } from "../contexts/stateContext";
import DeleteModal from "../modal/DeleteModal";
import { MenuBar } from "../ui-kit/MenuBar";
import { WordsContainerComponent } from "../ui-kit/WordsContainerComponent";

export default function HomeScreen({ navigation }) {
  const [words, setWords] = useContext(StateContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {}, [words]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.WordsText}>Words</Text>
          <Text style={styles.PocketText}>Pocket</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Image source={UserIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.BoxContainer}>
        <View style={styles.Box}>
          {words !== null &&
            words.map((word, i) => (
              <View key={`word${i * 32}`}>
                <WordsContainerComponent
                  id={word.id}
                  word={word.word}
                  definition={word.definition}
                />
              </View>
            ))}

          {words.length < 1 && (
            <Text style={styles.AlertText}>
              Click in the black button below to save your ENGLISH words.
            </Text>
          )}
        </View>
      </ScrollView>

      <MenuBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 110,
  },
  TitleContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 12,
  },
  PocketText: {
    fontSize: 40,
    color: "#C1C1C1",
    marginTop: -15,
  },
  WordsText: {
    color: "#0096C7",
    fontWeight: "bold",
    fontSize: 40,
  },
  HeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 45,
  },
  BoxContainer: {
    width: "100%",
  },
  Box: {
    display: "flex",
    alignItems: "center",
  },
  AlertText: {
    fontSize: 24,
    paddingHorizontal: 40,
    marginTop: 60,
  },
});
