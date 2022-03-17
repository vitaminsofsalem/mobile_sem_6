import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../Screens/About";
import Home from "../Screens/Home";
import CustomNavMenu from "../Components/CustomNavMenu";
import SearchBar from "../Components/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import Overlay from "../Components/Overlay";

const Drawer = createDrawerNavigator();
function NavMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomNavMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerStyle: {
          width: "80%",
          marginTop: 35,
        },
        drawerLabelStyle: {
          marginLeft: -25,
        },
        drawerActiveBackgroundColor: "#472f17",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={Overlay}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="help-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Overlay"
        component={Overlay}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="help-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default NavMenu;
