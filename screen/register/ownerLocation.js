import React, { Component } from "react";
import {
  Constants,
  MapView,
  Location,
  Permissions,
  IntentLauncherAndroid
} from "expo";
import {
  View,
  Platform,
  Dimensions,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const homePlace = {
  description: "내집",
  geometry: { location: { lat: 37.566535, lng: 126.9779692 } }
};
const workPlace = {
  description: "직장",
  geometry: { location: { lat: 37.48142999999999, lng: 126.882637 } }
};

if (Platform.OS === "android") {
  IntentLauncherAndroid.startActivityAsync(
    IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
  );
}

const window = Dimensions.get("window");
const { width, height } = window;
LATITUD_DELTA = 0.00922;
LONGITUDE_DELTA = LATITUD_DELTA + width / height;

export default class OwnerGooglePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: 13.566536,
        longitude: 126.977966,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      locationResult: null,
      location: {
        coords: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: LATITUD_DELTA,
          longitudeDelta: 0.00922
        }
      },
      title: "test",
      name: null
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "위치 접근 허가 거부되었습니다.",
        location: {
          coords: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: this.state.location.coords.latitudeDelta,
            longitudeDelta: this.state.location.coords.longitudeDelta
          }
        }
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      locationResult: JSON.stringify(location),
      location: {
        coords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: this.state.location.coords.latitudeDelta,
          longitudeDelta: this.state.location.coords.longitudeDelta
        }
      }
    });
  };

  location = async () => {
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      location: {
        coords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: this.state.location.coords.latitudeDelta,
          longitudeDelta: this.state.location.coords.longitudeDelta
        }
      }
    });
  };

  render() {
    console.log("#" + this.state.location.coords.longitudeDelta);
    return (
      <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="주소를 입력하세요."
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => {
            // console.log(data);
            console.log(details);
            this.setState({
              location: {
                coords: {
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: LATITUD_DELTA,
                  longitudeDelta: LONGITUDE_DELTA
                }
              },
              title: details.formatted_address,
              name: details.name
            });
          }}
          getDefaultValue={() => {
            return ""; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: "AIzaSyD0AWuA3tJdtBc0Jk-5n-q4XacF2vfHZYA",
            language: "ko", // language of the results
            types: "geocode" // default: 'geocode' / "(cities)"
          }}
          styles={{
            description: {
              fontWeight: "bold"
            },
            predefinedPlacesDescription: {
              color: "#1faadb"
            }
          }}
          // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          // currentLocationLabel="현재위치"
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={
            {
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }
          }
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: "distance",
            types: "cafe"
          }}
          filterReverseGeocodingByTypes={[
            "locality",
            "administrative_area_level_3"
          ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          predefinedPlaces={[homePlace, workPlace]}
          debounce={200}
        />
        <Button
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30
          }}
          title={"현재위치"}
          // onPress={this.locationseret.bind(this)}
          onPress={this.location.bind(this)}
        />

        <MapView
          style={{ alignSelf: "stretch", height: "72%" }}
          region={{
            //  latitude: this.state.mapRegion.latitude,
            //  longitude: this.state.mapRegion.longitude,
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: this.state.location.coords.latitudeDelta,
            longitudeDelta: this.state.location.coords.longitudeDelta
          }}
          //  onRegionChange={this._handleMapRegionChange.bind(this)}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#b2bec3",
              width: "10%",
              height: "5%",
              marginTop: 20,
              marginLeft: 20,
              opacity: 0.7
            }}
            onPress={() => {
              this.setState({
                location: {
                  coords: {
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                    latitudeDelta: this.state.location.coords.latitudeDelta,
                    longitudeDelta:
                      this.state.location.coords.longitudeDelta - 0.001
                  }
                }
              });
            }}
          >
            <Ionicons
              name={"ios-add"}
              style={{ fontSize: 30, color: "#fff" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#b2bec3",
              width: "10%",
              height: "5%",
              marginLeft: 20,
              borderTopColor: "gray",
              borderTopWidth: 1,
              opacity: 0.7
            }}
            onPress={() => {
              this.setState({
                location: {
                  coords: {
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                    latitudeDelta: this.state.location.coords.latitudeDelta,
                    longitudeDelta:
                      this.state.location.coords.longitudeDelta + 0.001
                  }
                }
              });
            }}
          >
            <Ionicons
              name={"ios-remove"}
              style={{ fontSize: 30, color: "#fff" }}
            />
          </TouchableOpacity>
          <MapView.Marker
            draggable
            coordinate={this.state.location.coords}
            title={this.state.title}
            description={this.state.name}
          />
        </MapView>
        <Button
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30
          }}
          title={"저장"}
          // onPress={this.locationseret.bind(this)}
          onPress={() => {
            this.props.navigation.navigate("addregist", {
              coordinate: this.state.location.coords,
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              owneraddresstext: this.state.title
            });
          }}
        />
      </View>
    );
  }
}
