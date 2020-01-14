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
  TextInput,
  Text,
  Platform
} from "react-native";
import { DocumentPicker, ImagePicker, Permissions } from "expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import sitterdata from "../../components/sitterdata";

const userImage =
  "https://postfiles.pstatic.net/MjAxOTAxMTVfOTQg/MDAxNTQ3NTEyODU0NDk4.DcAvlx3CGY9pGFlgWZA7mIr6_SCt8h_gGaHYGAFlDIYg.bQ9kBiykOzlbxyIyQ3nTCO7lGw4NVmmIeDV7pz0OX94g.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-15_%EC%98%A4%EC%A0%84_9.28.54.png?type=w966";

var num2 = 0;
class UserInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userimage: this.props.navigation.state.params.userimage,
      user: this.props.navigation.state.params.user,
      address: this.props.navigation.state.params.address
    };
  }

  /** 이미지 변경함수 */
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    alert(result.type);
    console.log(result);
    console.log(num2);
    num2 += 1;

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "rgb(185, 142, 255)", height: 70 }}>
          <Left>
            <TouchableOpacity
              style={{ padding: 5, paddingRight: 15 }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicons
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  fontSize: 35,
                  marginTop: Platform.OS === "ios" ? 0 : 15
                }}
                name="ios-arrow-back"
              />
            </TouchableOpacity>
          </Left>
          <Body
            style={{
              paddingLeft: Platform.OS === "ios" ? 0 : 90,
              paddingTop: Platform.OS === "ios" ? 0 : 10
            }}
          >
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
              회원 프로필
            </Text>
          </Body>
          <Right />
        </Header>
        <View style={styles.container2}>
          <View style={styles.userprofile2}>
            <View style={styles.userimageborder2}>
              {num2 == 0 ? (
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
              ) : (
                image && (
                  <Image
                    onPress={this._pickImage}
                    transparent
                    source={{ uri: image }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 50
                    }}
                  />
                )
              )}
            </View>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity onPress={this._pickImage}>
                <Text style={styles.useraddress3}>사진 변경하기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
              marginLeft: 10
            }}
          >
            <Text style={styles.infoname}>회원 이름</Text>
            <TextInput
              style={styles.infoinput}
              onChangeText={user => this.setState({ user })}
              placeholder={"변경할 이름을 입력하세요"}
              value={this.state.user}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
              marginLeft: 10
            }}
          >
            <Text style={styles.infoname}>회원 주소</Text>
            <TextInput
              secureTextEntry={false}
              style={styles.infoinput}
              onChangeText={address => this.setState({ address })}
              placeholder={"변경할 주소를 입력하세요"}
              value={this.state.address}
            />
          </View>
          <View
            style={{
              marginTop: 350,
              alignItems: "center",
              width: "100%"
            }}
          >
            <TouchableOpacity style={styles.touchchange}>
              <Text style={{ color: "#fff", fontSize: 18 }}>변경 하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default UserInfoScreen;
