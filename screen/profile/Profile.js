import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Card,
  CardItem
} from "native-base";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Platform,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

/** 로컬 데이터 이미지 불러오기  */
const userImage =
  "https://postfiles.pstatic.net/MjAxOTAxMTVfOTQg/MDAxNTQ3NTEyODU0NDk4.DcAvlx3CGY9pGFlgWZA7mIr6_SCt8h_gGaHYGAFlDIYg.bQ9kBiykOzlbxyIyQ3nTCO7lGw4NVmmIeDV7pz0OX94g.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-15_%EC%98%A4%EC%A0%84_9.28.54.png?type=w966";

const petImage =
  "https://postfiles.pstatic.net/MjAxOTAxMTVfMjk3/MDAxNTQ3NTEzMDI1MDEx.ODD9YUUNc5YSk4Zz1wTgxmpf_BRr154ekJ-vJQ1f3ocg.u1uIXInfJ3O2PTKFmKFaI46epH_e8IzD5TEB96K-eF4g.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-15_%EC%98%A4%EC%A0%84_9.42.43.png?type=w966";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    const { loginEmail } = this.props;
    console.log(loginEmail);
    this.state = {
      user: "",
      userimage: "image",
      address: "",
      class: "",
      petname: "이름없음",
      petage: "0",
      petvaccination: "",
      petsex: "성별"
    };
  }

  async componentDidMount() {
    const sitterid = await AsyncStorage.getItem("loginid");
    const sitteraddress = await AsyncStorage.getItem("loginaddress");
    const sitterclass = await AsyncStorage.getItem("loginclass");
    const sitterimage = await AsyncStorage.getItem("loginimage");
    const sitterpetimage = await AsyncStorage.getItem("loginpetimage");
    const ownerid = await AsyncStorage.getItem("ownerid");
    const ownerimage = await AsyncStorage.getItem("ownerimage");
    const owneraddress = await AsyncStorage.getItem("owneraddress");
    const ownerclass = await AsyncStorage.getItem("ownerclass");
    const ownerpetname = await AsyncStorage.getItem("ownerpetname");
    const ownerpetage = await AsyncStorage.getItem("ownerpetage");
    const petvaccination = await AsyncStorage.getItem("petvaccination");
    const ownerpetsex = await AsyncStorage.getItem("ownerpetsex");
    const ownerpetimage = await AsyncStorage.getItem("petimage");
    console.log(sitterclass);
    console.log(ownerclass);
    if (sitterclass == "펫시터") {
      this.setState({
        user: sitterid,
        userimage: sitterimage,
        address: sitteraddress,
        class: sitterclass,
        petimage: sitterpetimage
      });
    } else if (ownerclass == "펫주인") {
      this.setState({
        user: ownerid,
        userimage: ownerimage,
        address: owneraddress,
        class: ownerclass,
        petimage: ownerpetimage,
        petname: ownerpetname,
        petage: ownerpetage,
        petvaccination: petvaccination,
        petsex: ownerpetsex
      });
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "rgb(185, 142, 255)", height: 70 }}>
          <Left>
            <TouchableOpacity
              style={{ padding: 5, paddingRight: 15 }}
              //onPress={() => this.props.navigation.openDrawer()}
              onPress={() => this.props.navigation.navigate("펫시터")}
            >
              <Ionicons
                name={"ios-arrow-back"}
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  fontSize: 35,
                  marginTop: Platform.OS === "ios" ? 0 : 15
                }}
              />
            </TouchableOpacity>
          </Left>
          <Body
            style={{
              paddingLeft: Platform.OS === "ios" ? 0 : 90,
              paddingTop: Platform.OS === "ios" ? 0 : 10
            }}
          >
            <Text style={styles.title}>프로필 관리</Text>
          </Body>
          <Right />
        </Header>
        <View style={styles.container2}>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() =>
              this.props.navigation.navigate("userinfo", {
                user: this.state.user,
                userimage: this.state.userimage,
                address: this.state.address
              })
            }
          >
            <View style={styles.userprofile}>
              <View style={styles.userimageborder}>
                <Image
                  transparent
                  source={{
                    uri: this.state.userimage
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 50
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.username}>
                  {this.state.user + this.state.class}
                </Text>
                <Text style={styles.useraddress}>{this.state.address}</Text>
              </View>
              <Ionicons style={styles.iconstyle} name="ios-arrow-forward" />
            </View>
          </TouchableOpacity>
          <Text style={styles.profileTitle}>반려동물 정보</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("petinfo", {
                petname: this.state.petname,
                petage: this.state.petage,
                petvaccination: this.state.petvaccination,
                petimage: this.state.petimage
              })
            }
            style={{ marginLeft: Platform.OS === "ios" ? 0 : 10 }}
          >
            <Card style={{ width: 370, flexDirection: "row" }}>
              <CardItem>
                <View style={styles.petimageborder}>
                  <Image
                    transparent
                    source={{
                      uri: this.state.petimage
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 50
                    }}
                  />
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.petname}>{this.state.petname}</Text>
                  <Text style={styles.petinfo}>
                    {this.state.petage +
                      "살" +
                      "/" +
                      this.state.petsex +
                      "/" +
                      this.state.petvaccination +
                      "접종"}
                  </Text>
                </View>
              </CardItem>
              <Ionicons style={styles.iconstyle2} name="ios-arrow-forward" />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("addpetprofile")}
            style={{ marginLeft: Platform.OS === "ios" ? 0 : 10 }}
          >
            <Card style={{ width: 370, flexDirection: "row" }}>
              <CardItem style={{ flexDirection: "row" }}>
                <Ionicons style={styles.iconstyle3} name="ios-paw" />
                <Text style={styles.addpet}>반려동물 추가하기</Text>
              </CardItem>
              <Ionicons style={styles.iconstyle4} name="ios-add-circle" />
            </Card>
          </TouchableOpacity>
          <Text style={styles.profileTitle}>즐겨찾기</Text>
          <Card
            style={{
              width: 370,
              flexDirection: "row",
              marginLeft: Platform.OS === "ios" ? 0 : 10
            }}
          >
            <Ionicons style={styles.iconstyle5} name="ios-heart" />
          </Card>
        </View>
      </Container>
    );
  }
}

export default ProfileScreen;
