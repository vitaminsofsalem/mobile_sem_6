import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import React, { useRef, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledContainer = styled.View`
  position: relative;
  width: 80%;
  height: 50px;
  border-radius: 15px;
  border: 1px solid lightgray;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTextInput = styled.TextInput`
  position: absolute;
  padding: 12px;
  width: 80%;
  height: 100%;
  line-height: 30px;
  border: 0;
  font-size: 20px;
  border-radius: 15px;
  margin: 0;
  background: white;
`;
export default function SearchBar() {
  const [isPressed, setPressed] = useState(false);
  return (
    <View style={styles.view}>
      <View style={[styles.container, styles.shadow]}>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          selectionColor={"black"}
        ></TextInput>
        <Ionicons
          style={{ alignSelf: "flex-end", marginRight: 10 }}
          name="search"
          color={"grey"}
          size={24}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  container: {
    position: "relative",
    width: "90%",
    height: 50,
    borderRadius: 15,
    borderColor: "lightgray",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textInput: {
    position: "absolute",
    padding: 12,
    width: "100%",
    height: "100%",
    lineHeight: 30,
    fontSize: 20,
    borderRadius: 15,
    margin: 0,
    backgroundColor: "white",
  },
});
