import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../Screens/About";
import Home from "../Screens/Home";
import CustomNavMenu from "../Components/CustomNavMenu";

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
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default NavMenu;
