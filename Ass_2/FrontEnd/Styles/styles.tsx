import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
  },
});

export default styles;
