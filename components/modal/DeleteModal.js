import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { StateContext } from "../contexts/stateContext";

export default function DeleteModal({ modalVisible, setModalVisible, id }) {
  const [words, setWords] = useContext(StateContext);

  const handleDelete = (id) => {
    const arr = words.filter((word) => word.id !== id);
    setWords([...arr]);
    setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text>Delete Word?</Text>
            </View>

            {/* BUTTONS */}
            <View style={styles.ButtonContainer}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#EC615B" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: "#023E8A",
                }}
                onPress={() => handleDelete(id)}
              >
                <Text style={styles.textStyle}>Delete</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 13,
    padding: 10,
    elevation: 2,
    marginHorizontal: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  ButtonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
});
