import {
  View,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
// import styles from "../Styles/styles";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import SearchBar from "../Components/SearchBar";

const { height, width } = Dimensions.get("screen");

const StyledView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

export default function Index({ navigation }: { navigation: any }) {
  const [img, setImg] = useState<any | null>(null);

  useEffect(() => {
    setImg(`https://picsum.photos/1920/1080`);
  }, []);

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: img + "?" + new Date() }} // to force re-render
            style={styles.imageBGR}
          >
            <View style={styles.header}>
              <Image
                style={styles.image}
                source={require("../assets/chromeLogo_white_vertical.png")}
                resizeMode="cover"
              />
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={40} color="whitesmoke" />
              </TouchableOpacity>
            </View>
            <View style={{ top: "20%" }}>
              <SearchBar />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    width: 220,
    height: 220,
    bottom: 72,
    right: 10,
    resizeMode: "contain",
  },
  imageBGR: {
    height: height,
    width: width,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "10%",
    width: "100%",
    padding: 10,
  },
});
