import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchBar() {
  const navigation = useNavigation<any>();
  const [term, setTerm] = useState("");

  return (
    <View style={styles.view}>
      <View style={[styles.container, styles.shadow]}>
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          selectionColor={"black"}
          onChangeText={(e) => setTerm(e)}
          onSubmitEditing={() => {
            navigation.navigate("SearchResults", { term });
          }}
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
