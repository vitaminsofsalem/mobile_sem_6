import react from "react";
import { View, Text, StyleSheet, PickerIOSComponent } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
