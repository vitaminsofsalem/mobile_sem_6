import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image: {
    width: 200,
    height: 200,
    bottom: 15,
    resizeMode: "contain",
  },
  imageBGR: {
    height: height,
    width: width,
  },
});

export default styles;
