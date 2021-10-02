import React, { useContext, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PlusIcon from "../../assets/icons/plus.png";
import ZapIcon from "../../assets/icons/zap.png";
import ListIcon from "../../assets/icons/list.png";
import ModalComponent from "../modal/Modal";
import { StateContext } from "../contexts/stateContext";

export const MenuBar = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [words, setWords] = useContext(StateContext);

  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <SafeAreaView style={styles.Container}>
        {/* <TouchableOpacity onPress={onPress}>
          <Image source={ListIcon} style={styles.ListIcon} />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleOpenModal}>
          <Image source={PlusIcon} style={styles.PlusIcon} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={onPress}>
          <Image source={ZapIcon} style={styles.ZapIcon} />
        </TouchableOpacity> */}
      </SafeAreaView>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    backgroundColor: "white",
    height: 100,
    borderTopColor: "#C1C1C1",
    borderTopWidth: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 40,
    position: "absolute",
    bottom: 0,
    zIndex: 10000,
  },
});
