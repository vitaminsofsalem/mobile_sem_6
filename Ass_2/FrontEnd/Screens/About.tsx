import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function About({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons name="construct" size={100} color="whitesmoke" />
        <Text style={styles.text}>Under Construction...</Text>
        <View>
          <TouchableOpacity
            style={[styles.boxShadow]}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.btn, styles.boxShadow]}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#472f17",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    fontSize: 25,
    color: "whitesmoke",
  },

  btn: {
    alignItems: "center",
    backgroundColor: "teal",
    marginTop: 25,
    padding: 15,
    borderRadius: 25,
    textAlign: "center",
    width: 200,
    color: "whitesmoke",
    fontSize: 17,
    marginBottom: 90,
  },
  boxShadow: {},
});
