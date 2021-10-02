import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import DeleteModal from "../modal/DeleteModal";

export const WordsContainerComponent = ({ word, definition, id }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <TouchableOpacity style={styles.Container} onPress={handleOpenModal}>
        <Text style={styles.TitleText}>{word}</Text>
        <Text style={styles.secondText}>{definition}</Text>
        <DeleteModal
          id={id}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: 280,
    backgroundColor: "#0096C7",
    minHeight: 125,
    borderRadius: 13,
    elevation: 4,
    marginTop: 24,
    paddingVertical: 15,
  },

  TitleText: {
    fontSize: 24,
    color: "white",
    marginHorizontal: 24,
    // marginTop: 10,
  },
  secondText: {
    color: "#E5E5E5",
    marginHorizontal: 24,
    fontSize: 16,
  },
});
