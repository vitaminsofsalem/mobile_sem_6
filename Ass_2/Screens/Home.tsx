import {
  View,
  Image,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import SearchBar from "../Components/SearchBar";

const { height, width } = Dimensions.get("screen");

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
              <Text style={styles.caption}>
                The World's Most Open-Source Search Engine
              </Text>
              <Text style={styles.smallPrint}>
                Only When It Comes To Your Data Though...
              </Text>
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
  caption: {
    textAlign: "center",
    marginTop: "10%",
    fontWeight: "bold",
    color: "whitesmoke",
    fontSize: 24,
  },
  smallPrint: {
    textAlign: "center",
    fontWeight: "bold",
    color: "whitesmoke",
    fontSize: 14,
  },
});
