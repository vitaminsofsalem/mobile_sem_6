import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Card(props: any) {
  console.log(props.img);
  return (
    <View style={[styles.card, styles.shadow]}>
      <Image
        style={{
          width: "100%",
          height: "65%",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
        source={{
          uri: props.img,
        }}
        resizeMode="cover"
      />
      <View style={styles.fonts}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 25,
              height: 25,
            }}
            source={{
              uri: props.logo,
            }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 5 }}>
            {props.slug}
          </Text>
        </View>
        <Text style={{ fontWeight: "500", marginTop: 12 }}>{props.name}</Text>
        <Text style={{ fontSize: 10 }}>{props.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 350,
    width: "95%",
    borderRadius: 20,
    backgroundColor: "whitesmoke",
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
  fonts: {
    padding: 15,
  },
});
