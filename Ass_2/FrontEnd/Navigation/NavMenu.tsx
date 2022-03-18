import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../Screens/About";
import Home from "../Screens/Home";
import CustomNavMenu from "../Components/CustomNavMenu";
import SearchBar from "../Components/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import SearchResults from "../Screens/SearchResults";

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
        component={About}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="help-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SearchResults"
        component={SearchResults}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="help-outline" size={22} color={color} />
          ),
          drawerItemStyle: { display: "none" }, // Hide the search results screen from the nav menu
        }}
      />
    </Drawer.Navigator>
  );
}

export default NavMenu;
