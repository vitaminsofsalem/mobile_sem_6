import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomNavMenu(
  props: any,
  { navigation }: { navigation: any }
) {
  return (
    <>
      <View style={styles.container}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.header}
        >
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Ionicons name="menu" size={40} color="whitesmoke" />
          </TouchableOpacity>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "pink",
  },
});
