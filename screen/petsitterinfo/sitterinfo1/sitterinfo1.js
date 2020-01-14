import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";
import {
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";

const cardImage =
  "https://postfiles.pstatic.net/MjAxOTAxMTVfMjk3/MDAxNTQ3NTEzMDI1MDEx.ODD9YUUNc5YSk4Zz1wTgxmpf_BRr154ekJ-vJQ1f3ocg.u1uIXInfJ3O2PTKFmKFaI46epH_e8IzD5TEB96K-eF4g.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-15_%EC%98%A4%EC%A0%84_9.42.43.png?type=w966";
const cardcenterImage =
  "https://postfiles.pstatic.net/MjAxOTAxMTVfOTQg/MDAxNTQ3NTEyODU0NDk4.DcAvlx3CGY9pGFlgWZA7mIr6_SCt8h_gGaHYGAFlDIYg.bQ9kBiykOzlbxyIyQ3nTCO7lGw4NVmmIeDV7pz0OX94g.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-15_%EC%98%A4%EC%A0%84_9.28.54.png?type=w966";

class SitterInfoScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.navigation.state.params.text,
      userimage: this.props.navigation.state.params.userimage,
      petimage: this.props.navigation.state.params.petimage,
      rating: this.props.navigation.state.params.rating,
      address: this.props.navigation.state.params.address,
      latitude: this.props.navigation.state.params.latitude,
      longitude: this.props.navigation.state.params.longitude
    };
  }

  render() {
    sitterNames = this.state.text;
    sitterRating = this.state.rating;
    sitterlatitude = this.state.latitude;
    sitterlongitude = this.state.longitude;
    console.log(this.state.petimage);
    return (
      <Container
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height
        }}
      >
        <ImageBackground
          source={{
            uri: this.state.petimage
          }}
          style={{
            width: Dimensions.get("window").width
          }}
        >
          <Header
            hasTabs
            style={{ backgroundColor: "transparent", height: 200 }}
          >
            <Left style={{ position: "absolute", left: 10, top: 40 }}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  width: "100%",
                  height: "100%"
                }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Ionicons
                  name="ios-arrow-back"
                  style={{ color: "#fff", fontSize: 30 }}
                />
              </Button>
            </Left>
            <Body
              style={{
                borderColor: "#fff",
                borderWidth: 3,
                position: "absolute",
                bottom: 3,
                height: 100,
                width: 100,
                borderRadius: 50
              }}
            >
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
            </Body>
            <Right />
          </Header>
        </ImageBackground>

        <Tabs>
          <Tab
            activeTextStyle={{ color: "rgb(126, 119, 255)" }}
            heading="펫시팅정보"
          >
            <TabOne />
          </Tab>
          <Tab
            activeTextStyle={{ color: "rgb(126, 119, 255)" }}
            heading="소개 및 비용"
          >
            <TabTwo />
          </Tab>
          <Tab activeTextStyle={{ color: "rgb(126, 119, 255)" }} heading="후기">
            <TabThree />
          </Tab>
        </Tabs>
        <TouchableOpacity
          style={[
            {
              width: "100%",
              height: 50,
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(126, 119, 255)"
            }
          ]}
          onPress={() =>
            this.props.navigation.navigate("reservation", {
              text: this.state.text,
              address: this.state.address,
              userimage: this.state.userimage
            })
          }
        >
          <Text style={{ fontSize: 17, color: "#fff" }}> 예약하기</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SitterInfoScreen1;
