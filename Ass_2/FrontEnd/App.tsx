import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View, Image, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import styles from "./Styles/styles";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import NavMenu from "./Navigation/NavMenu";
import StackNav from "./Navigation/StackNav";

export default function App() {
  const [img, setImg] = useState<any | null>(null);

  useEffect(() => {
    setImg(`https://picsum.photos/1920/1080`);
  }, []);

  return (
    <>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </>
  );
}
