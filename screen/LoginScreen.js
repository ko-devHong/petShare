import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  Alert,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
  Button
} from "react-native";
import { Google, LinearGradient } from "expo";
import RoundButton from "../components/RoundButton";
import TestButton from "../components/TestButton";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  async componentDidMount() {
    console.log("tttttt");
    try {
      await AsyncStorage.removeItem("loginclass");
      return true;
    } catch (exception) {
      return false;
    }
  }

  /**** AsyncStorage 데이터 지우기 */
  async removeItemValue() {}

  showAlert(navigation) {
    Alert.alert(
      "어느쪽 가입하시겠습니까?",
      //"데이터 입력",
      "펫시터,펫주인",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "펫시터", onPress: () => navigation.navigate("sittercheck") },
        { text: "펫주인", onPress: () => navigation.navigate("check") }
      ],
      { cancelable: false }
    );
  }

  /* 구글 로그인

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        //androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId:
          "357759503883-aui2eta8ok3intr65g3smkdq0gsf8lmp.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  */

  /** 로긴 함수 */
  login = async () => {
    fetch("http://13.209.69.225:3000/login", {
      method: "POST", // or 'PUT'
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        if (response.success == true) {
          if (response.result == "환영합니다") {
            alert(response.result);
            AsyncStorage.setItem("loginid", response.id);
            AsyncStorage.setItem("loginimage", response.userimage);
            AsyncStorage.setItem("loginaddress", response.useraddress);
            AsyncStorage.setItem("loginclass", response.class);
            AsyncStorage.setItem("loginpetimage", response.petimage);
            this.props.navigation.navigate("펫시터");
          } else if (response.result == "환영합니다.") {
            alert(response.result);
            AsyncStorage.setItem("ownerid", response.ownerid);
            AsyncStorage.setItem("ownerimage", response.owneruserimage);
            AsyncStorage.setItem("owneraddress", response.owneruseraddress);
            AsyncStorage.setItem("ownerclass", response.ownerclass);
            AsyncStorage.setItem("ownerpetname", response.ownerpetname);
            AsyncStorage.setItem("ownerpetage", response.ownerpetage);
            AsyncStorage.setItem("petvaccination", response.petvaccination);
            AsyncStorage.setItem("ownerpetsex", response.ownerpetsex);
            AsyncStorage.setItem("petimage", response.ownerpetimage);
            this.props.navigation.navigate("펫시터");
          }
        } else alert(response.result);
      })
      //console.log("Success:", JSON.stringify(response))
      .catch(error => console.error("Error:", error));
  };

  render() {
    loginEmail = this.state.username;
    return (
      <LinearGradient
        style={styles.container}
        colors={["rgb(185, 142, 255)", "rgb(148, 193, 255)"]}
      >
        <View
          style={{
            flex: 0.5,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "flex-end",

            paddingBottom: 55
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "30%",
              resizeMode: "center"
            }}
            source={require("../image/icLogo.png")}
          />
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>
            Happy Pet
          </Text>
        </View>
        <View style={styles.reaserch}>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 2 }}
          >
            <TextInput
              style={{
                backgroundColor: "rgb(243, 240, 255)",
                borderRadius: 20,
                height: 40,
                width: "90%",
                paddingHorizontal: 140,
                fontSize: 15
              }}
              returnKeyType="next"
              onSubmitEditing={() => this.email.focus()}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 8
            }}
          >
            <TextInput
              secureTextEntry={true}
              style={{
                backgroundColor: "rgb(243, 240, 255)",
                borderRadius: 20,
                height: 40,
                width: "90%",
                paddingHorizontal: 128,
                fontSize: 15
              }}
              returnKeyType="go"
              ref={input => (this.email = input)}
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>
        </View>
        <View
          style={{
            paddingTop: 34,
            alignItems: "center",
            width: "100%"
          }}
        >
          <RoundButton
            name={"로그인"}
            style={{ width: "90%" }}
            onPress={this.login}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 16 }}>
          <Text style={{ fontSize: 14, color: "#fff" }}>
            아직 회원가입 안하셨습니까?
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 7,
              borderBottomColor: "rgb(126, 119, 255)",
              borderBottomWidth: 1
            }}
            onPress={() => this.showAlert(this.props.navigation)}
            /* onPress{ () => this.props.navigation.navigate("이름")}*/
            /*      onPress={() => {}}*/
          >
            <Text style={{ fontSize: 17, color: "rgb(126, 119, 255)" }}>
              회원가입
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

export class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff"
          }}
          imageStyle={{ opacity: 0.3 }}
          source={require("../image/3.gif")}
        >
          <Text style={{ fontSize: 20 }}>Detail Screen</Text>
        </ImageBackground>
      </View>
    );
  }
}

export class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {
        name: "입력값",
        age: ""
      }
    };
  }
  async componentDidMount() {
    const value = await AsyncStorage.getItem("loginid");
    if (value !== null) {
      this.setState({
        pet: {
          age: value
        }
      });
    }
  }

  render() {
    console.log(this.state.pet.name);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ImageBackground
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
            imageStyle={{ opacity: 0.3 }}
            source={require("../image/4.png")}
          >
            <Text style={{ fontSize: 20 }}>
              회원가입 전에 본인인증 해주세요
            </Text>
            <TouchableOpacity
              style={[
                {
                  width: "30%",
                  height: 30,
                  borderColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#74b9ff"
                }
              ]}
              onPress={async () => {
                const response = await fetch(
                  "http://13.209.69.225:3000/test/users2"
                );
                const res = await response.json();
                console.log(res);
                console.log(res[0].by);
                console.log(res[0].class);
                this.setState({
                  pet: {
                    name: res[0].by
                  }
                });
              }}
            >
              <Text style={{ fontSize: 17, color: "#fff" }}>{"Logout "}</Text>
            </TouchableOpacity>
            <Text>{this.state.pet.name}</Text>
            <Text>{this.state.pet.age}</Text>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74b9ff"
  },
  image: {
    width: 100,
    height: 100
  },
  reaserch: {
    // backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});

/*   로컬 데이타 비교 법

 //로컬 데이터 입력란//
const loginData = [
  {
    username: "",
    password: ""
  }
];


<RoundButton
            name={"로그인"}
            style={{ width: "90%" }}
            onPress={() => {
              if (this.state.username === loginData[0].username) {
                if (this.state.password === loginData[0].password) {
                  Alert.alert("안내", this.state.username + "님 환영합니다");
                  this.props.navigation.navigate("펫시터");
                } else Alert.alert("안내", "비밀번호가 안맞습니다");
              } else if (this.state.username !== loginData[0].username) {
                Alert.alert("안내", "아이디를 확인해주새요");
              }
            }}
          />
          
          */

/*   async componentDidMount() {
    const response = await fetch("http://13.209.69.225:3000/test/users11");
    const res = await response.json();
    console.log(res);
    console.log(res.by);
    console.log(res.class);
  }
  */
