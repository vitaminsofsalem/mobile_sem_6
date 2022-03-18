import React, { useState } from "react";
import { useEffect } from "react";
import * as axios from "axios";
import {
  View,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";

const SearchResults = ({ route }: { route: any }) => {
  const { term } = route.params;
  const isFocused = useIsFocused(); // re render only when focused
  const navigation = useNavigation();
  // console.log(isFocused);

  const [country, setCountry] = useState<GeocodeResult>();
  const [universities, setUniversity] = useState<University[]>();
  const [_, setViewport] = useState<Region>();

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  let latitudeDelta, longitudeDelta;
  if (country) {
    latitudeDelta =
      country.geometry.bounds.northeast.latitude -
      country.geometry.bounds.northeast.longitude;
    longitudeDelta = latitudeDelta * ASPECT_RATIO;
  }

  useEffect(() => {
    Promise.all([
      axios.default.get(`http://192.168.1.6:3000/locations/${term}`),
      axios.default.get(`http://192.168.1.6:3000/universities/${term}`),
    ]).then(([{ data: locationResults }, { data: universitiesResults }]) => {
      if (locationResults) setCountry(locationResults);
      if (universitiesResults) setUniversity(universitiesResults);
    });
  }, [term]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => console.log("List Universities Button")}
          title="List Universities"
          color="#841584"
        />

        {navigation.isFocused()
          ? country &&
            latitudeDelta &&
            longitudeDelta && (
              <MapView
                style={styles.map}
                zoomControlEnabled={true}
                provider="google"
                onRegionChange={(region) => setViewport({ region })}
                initialRegion={{
                  latitude: country.geometry.location.latitude,
                  longitude: country.geometry.location.longitude,
                  latitudeDelta: 10, // delta between origin bounds and client viewport
                  longitudeDelta: 10, // delta between origin bounds and client viewport
                }}
              >
                {universities?.map((marker: University, index: number) => (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: marker.lat,
                      longitude: marker.lng,
                    }}
                    title={Marker.name}
                    description={Marker.name}
                  ></Marker>
                ))}
              </MapView>
            )
          : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

type RouteParams = {
  term: string;
};

type RouteProps = {
  params: RouteParams;
  name: string;
  key: string;
};

type GeometryCoordinates = {
  latitude: number;
  longitude: number;
};
type GeometryBounds = {
  northeast: GeometryCoordinates;
  southwest: GeometryCoordinates;
};
type GeometryResult = {
  bounds: GeometryBounds;
  location: GeometryCoordinates;
};
type GeocodeResult = {
  geometry: GeometryResult;
};

type RegionCoordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
type Region = {
  region: RegionCoordinates;
};
type University = {
  name: string;
  lat: number;
  lng: number;
};
export default SearchResults;
