import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import * as axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export default function UniList() {
  const route = useRoute<any>();
  const { universities } = route.params;

  console.log(universities);
  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <View style={styles.container}>
          <FlatList
            data={universities}
            renderItem={({ item }) => (
              <>
                <View style={styles.flatContainer}>
                  <Card
                    img={item.image}
                    address={item.addressFmt}
                    name={item.name}
                    slug={item.slug}
                    logo={item.logo}
                  />
                </View>
              </>
            )}
            keyExtractor={(item, i) => i.toString()}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  flatContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
