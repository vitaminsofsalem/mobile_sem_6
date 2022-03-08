import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About({ navigation }: { navigation: any }) {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>This Took Way Too Long...</Text>
          <View style={[styles.buttonCtn, styles.boxShadow]}>
            <TouchableOpacity
              style={[styles.boxShadow]}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.btn, styles.boxShadow]}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    fontSize: 25,
  },

  btn: {
    alignItems: "center",
    backgroundColor: "teal",
    marginTop: 25,
    padding: 15,
    borderRadius: 25,
    textAlign: "center",
    width: 200,
    fontSize: 17,
  },
  boxShadow: {},
});
