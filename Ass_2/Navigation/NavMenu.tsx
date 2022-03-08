import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../Screens/About";
import Home from "../Screens/Home";

const Drawer = createDrawerNavigator();
function NavMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerStyle: {
          width: "80%",
          marginTop: 35,
        },
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default NavMenu;
