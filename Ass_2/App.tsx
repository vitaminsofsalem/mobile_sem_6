import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useEffect } from "react";
import styles from "./Styles/styles";

const { height, width } = Dimensions.get("screen");
console.log(width, height);
// useEffect(() => {
//   fetch(`https://picsum.photos/${width}/${height}`)
// },[])

const image = {
  uri: `https://picsum.photos/1920/1080`,
};
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.imageBGR}>
          <Image
            style={styles.image}
            source={require("./assets/chromeLogo_white_vertical.png")}
            resizeMode="cover"
          />
        </ImageBackground>
      </View>
    </>
  );
}
