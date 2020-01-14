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
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import styles from "./styles";

/** 로컬 데이터 이미지 불러오기  */
const userImage =
  "https://postfiles.pstatic.net/MjAxOTAxMTVfOTQg/MDAxNTQ3NTEyODU0NDk4.DcAvlx3CGY9pGFlgWZA7mIr6_SCt8h_gGaHYGAFlDIYg.bQ9kBiykOzlbxyIyQ3nTCO7lGw4NVmmIeDV7pz0OX94g.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-15_%EC%98%A4%EC%A0%84_9.28.54.png?type=w966";

const petImage =
  "https://postfiles.pstatic.net/MjAxOTAxMTVfMjk3/MDAxNTQ3NTEzMDI1MDEx.ODD9YUUNc5YSk4Zz1wTgxmpf_BRr154ekJ-vJQ1f3ocg.u1uIXInfJ3O2PTKFmKFaI46epH_e8IzD5TEB96K-eF4g.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-15_%EC%98%A4%EC%A0%84_9.42.43.png?type=w966";

class TheEndScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.navigation.state.params.text,
      userimage: this.props.navigation.state.params.userimage,
      address: this.props.navigation.state.params.address,
      choseDatess: this.props.navigation.state.params.choseDatess,
      receiveDatess: this.props.navigation.state.params.receiveDatess,
      select: this.props.navigation.state.params.select,
      transaction: 0x387f7cc54914dd4f45191a5ffb06e3d599b030a42c84943ec6e130b7bcda3af1
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "rgb(185, 142, 255)", height: 70 }}>
          <Left>
            <TouchableOpacity
              style={{ padding: 5, paddingRight: 15 }}
              //onPress={() => this.props.navigation.openDrawer()}
              onPress={() => this.props.navigation.goBack()}
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
            <Text style={styles.title}>거래 결과</Text>
          </Body>
          <Right />
        </Header>
        <View style={styles.container2}>
          <View
            style={{
              width: "100%",
              height: 110,
              backgroundColor: "rgb(126, 119, 255)",
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <View
              style={{
                borderColor: "#fff",
                borderWidth: 3,
                height: 100,
                width: 100,
                borderRadius: 50,
                marginLeft: 10
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
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ marginLeft: 20, fontSize: 25, color: "#fff" }}>
                {this.state.text + "펫시터"}
              </Text>
              <Text style={{ marginLeft: 20, fontSize: 17, color: "#fff" }}>
                {this.state.address}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: "rgb(126, 119, 255)",
              fontSize: 15,
              fontWeight: "bold"
            }}
          >
            맡기는 기간
          </Text>
          <Card
            style={{
              width: "100%",
              height: 170,
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <CardItem>
              <Text>
                {moment(this.state.choseDatess).format("YYYY년MM월DD일")}
              </Text>
            </CardItem>
            <CardItem>
              <Text
                style={{
                  height: 30,
                  fontSize: 20
                }}
              >
                ~
              </Text>
            </CardItem>

            <CardItem>
              <Text>
                {moment(this.state.receiveDatess).format("YYYY년MM월DD일")}
              </Text>
            </CardItem>
          </Card>

          <Text
            style={{
              color: "rgb(126, 119, 255)",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 20
            }}
          >
            강아지 가격 정보
          </Text>
          <Card
            style={{
              width: "100%",
              height: 100,
              alignItems: "center"
            }}
          >
            <CardItem
              style={{
                marginTop: 20,
                padding: 10,
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Text>{"가격: " + this.state.select + "원"}</Text>
              <Text>
                거래내역 :
                0x387f7cc54914dd4f45191a5ffb06e3d599b030a42c84943ec6e130b7bcda3af1
              </Text>
            </CardItem>
          </Card>
          <View style={{ alignItems: "center", marginTop: 20, width: "100%" }}>
            <Text style={{ fontSize: 18, color: "#d63031" }}>
              ※ 반드시 반려동물을 돌려 받았을때 눌러주세요 ※
            </Text>
            <TouchableOpacity
              style={[
                {
                  width: "88%",
                  height: 40,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgb(126, 119, 255)",
                  marginTop: 20
                }
              ]}
              onPress={() => {
                this.props.navigation.navigate("펫시터");
                Alert.alert("안내", "거래가 성공적 완료 되었습니다");
              }}
            >
              <Text style={{ fontSize: 17, color: "#fff" }}> 완료</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default TheEndScreen;
