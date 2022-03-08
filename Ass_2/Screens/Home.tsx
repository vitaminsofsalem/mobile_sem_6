import { View, Image, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import styles from "../Styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
}
