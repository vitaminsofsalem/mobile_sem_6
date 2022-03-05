import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image} from "react-native";
import styles from "./Styles/styles";

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/chromeLogo_black_vertical.png')}/>
    </View>
    </>
  );
}
