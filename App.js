import React, { Component } from "react";
import { Root } from "native-base";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./screen/LoginScreen";
import { RegisterScreen } from "./screen/LoginScreen";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import PetSitters from "./screen/PetSitters";
import PetOwners from "./screen/PetOwners";
import SideBar from "./sidebar";
import { AddPetScreen } from "./screen/PetSitters";
import { AddOwnerScreen } from "./screen/PetOwners";
import PetinfoScreen from "./screen/deckswiper";
import AdvancedDeck from "./screen/deckswiper/advanced";
import DogInfo from "./screen/deckswiper/dogInfo";
import DogInfo2 from "./screen/deckswiper/dogInfo2";
import DogInfo3 from "./screen/deckswiper/dogInfo3";
import DogInfo4 from "./screen/deckswiper/dogInfo4";
import CatInfo from "./screen/deckswiper/catInfo";
import CatInfo2 from "./screen/deckswiper/catInfo2";
import CatInfo3 from "./screen/deckswiper/catInfo3";
import CatInfo4 from "./screen/deckswiper/catInfo4";
import RegisterCheckbox from "./screen/register";
import ServiceScreen from "./screen/register/service";
import SafeScreen from "./screen/register/safe";
import PrivacyScreen from "./screen/register/privacy";
import GpsScreen from "./screen/register/gps";
import RegistScreen from "./screen/register/regist";
import SitterInfoScreen1 from "./screen/petsitterinfo/sitterinfo1/sitterinfo1";
import ReservationScreen from "./screen/reservation/Reservation";
import ProfileScreen from "./screen/profile/Profile";
import UserInfoScreen from "./screen/profile/userinfo";
import PetInfoScreen from "./screen/profile/petinfo";
import RegistSitterCheckbox from "./screen/register/petsitterindex";
import SitterRegistScreen from "./screen/register/sitterRegist";
import IntroduceScreen from "./screen/register/introduce";
import AddPetProfileScreen from "./screen/profile/addpet";
import TheEndScreen from "./screen/reservation/TheEnd";
import GooglePlacesInput from "./screen/register/Location";
import OwnerGooglePlaces from "./screen/register/ownerLocation";

const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "rgb(185, 142, 255)"
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 25
  }
};

const PetSittersStack = createStackNavigator(
  {
    screen: PetSitters,
    Add: AddPetScreen
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: "center"
  }
);

const PetOwnersStack = createStackNavigator(
  {
    screen: PetOwners,
    Add2: AddOwnerScreen
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: "center"
  }
);

const ServiceStack = createStackNavigator(
  {
    screen: ServiceScreen
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: "center"
  }
);

const SafeStack = createStackNavigator(
  {
    screen: SafeScreen
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: "center"
  }
);

const PrivacyStack = createStackNavigator(
  {
    screen: PrivacyScreen
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: "center"
  }
);

const GpsStack = createStackNavigator(
  {
    screen: GpsScreen
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: "center"
  }
);

const RegistStack = createStackNavigator(
  {
    screen: LoginScreen,
    check: RegisterCheckbox,
    sittercheck: RegistSitterCheckbox,
    addregist: RegistScreen,
    sitterregist: SitterRegistScreen,
    introduce: IntroduceScreen
  },
  {
    defaultNavigationOptions,
    headerLayoutPreset: "center"
  }
);

const MainTab = createBottomTabNavigator(
  {
    Registers: RegisterScreen,
    펫시터: PetSittersStack,
    펫주인: PetOwnersStack
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor, image }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "펫시터") {
          iconName = "ios-paw";
        } else if (routeName === "펫주인") {
          iconName = "ios-paw";
        } else if (routeName === "Registers") {
          iconName = "ios-person";
        }

        /* return routeName === "PetSitters" || routeName === "PetOwners" ? (
          <Image
            style={{ width: 30, height: 30, resizeMode: "stretch" }}
            source={{
              uri: iconName
            }}
          />
        ) : (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
        */
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: "rgb(185, 142, 255)",
        inactiveTintColor: "gray"
      }
    })
  }
);

const Drawers = createDrawerNavigator(
  {
    Home: {
      screen: LoginScreen
    },
    Register: {
      screen: ProfileScreen
    },
    MainTab: {
      screen: MainTab
    },
    PetInfo: {
      screen: PetinfoScreen
    }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const RootStack = createStackNavigator(
  {
    Drawers: {
      screen: Drawers
    },
    AdvancedDeck: {
      screen: AdvancedDeck
    },
    DogInfo: {
      screen: DogInfo
    },
    DogInfo2: {
      screen: DogInfo2
    },
    DogInfo3: {
      screen: DogInfo3
    },
    DogInfo4: {
      screen: DogInfo4
    },
    CatInfo: {
      screen: CatInfo
    },
    CatInfo2: {
      screen: CatInfo2
    },
    CatInfo3: {
      screen: CatInfo3
    },
    CatInfo4: {
      screen: CatInfo4
    },
    RegistStack: {
      screen: RegistStack
    },
    ServiceStack: {
      screen: ServiceStack
    },
    SafeStack: {
      screen: SafeStack
    },
    PrivacyStack: {
      screen: PrivacyStack
    },
    GpsStack: {
      screen: GpsStack
    },
    info: {
      screen: SitterInfoScreen1
    },
    reservation: {
      screen: ReservationScreen
    },
    userinfo: {
      screen: UserInfoScreen
    },
    petinfo: {
      screen: PetInfoScreen
    },
    addpetprofile: {
      screen: AddPetProfileScreen
    },
    TheEndScreen: {
      screen: TheEndScreen
    },
    GooglePlacesInput: {
      screen: GooglePlacesInput
    },
    OwnerGooglePlaces: {
      screen: OwnerGooglePlaces
    }
  },
  {
    initialRouteName: "Drawers",
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(RootStack);

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
