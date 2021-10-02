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

export default function ModalComponent({ modalVisible, setModalVisible }) {
  const [inputValue, setInputValue] = useState();
  const [loading, isLoading] = useState(false);
  const [words, setWords] = useContext(StateContext);

  useEffect(() => {}, []);

  const fetchData = async () => {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
      const response = await axios.get(url);

      //   alert(JSON.stringify(response.data[0].word));
      setWords([
        ...words,
        {
          word: response.data[0].word,
          definition: response.data[0].meanings[0].definitions[0].definition,
          id: Date.now(),
        },
      ]);
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = () => {
    if (inputValue == "" || inputValue == undefined) return;

    fetchData();

    setInputValue("");
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
              <Text>Save Word:</Text>
              <TextInput
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 250,
                  padding: 5,
                }}
              />
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
                onPress={() => handleSubmit()}
              >
                <Text style={styles.textStyle}>Create</Text>
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
