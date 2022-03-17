import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
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
          <View
            style={{
              padding: 20,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/profile_pic.jpg")}
              style={styles.img}
            />
            <Text
              style={{
                marginTop: 5,
                fontSize: 17,
                fontWeight: "normal",
              }}
            >
              AmrShawki
            </Text>
          </View>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  img: {
    height: 125,
    width: 125,
    borderRadius: 4000000,
  },
});
