import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";

const drawerCover = require("../image/1.png");
const drawerImage = require("../image/icLogo.png");
const datas = [
  {
    name: "프로필",
    route: "Register",
    icon: "ios-person",
    bg: "#C5F442"
  }
];
const datas2 = [
  {
    name: "펫 정보",
    route: "PetInfo",
    icon:
      "https://postfiles.pstatic.net/MjAxOTAxMjFfNTQg/MDAxNTQ4MDUyMTMzNDg0.aRGCms4BtnBtHR8Q9ATbZgjTJ5T85YeZIB2uw-hJH-og.wxPGXSC2dlC2hI_EevV6R6fM84ebQ3EXbQxgxzTy0aQg.PNG.dea972/dogcat.png?type=w966",
    bg: "#C5F442"
  }
];
const datas3 = [
  {
    name: "로그아웃",
    route: "Home",
    icon: "ios-log-out",
    bg: "#C5F442"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={{}} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />
          <Text style={styles.drawerText}>Happy Pet</Text>
          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Ionicons
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text style={styles.badgeText}>{`${
                        data.types
                      } Types`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
          <List
            style={{ borderBottomColor: "#b2bec3", borderBottomWidth: 1 }}
            dataArray={datas2}
            renderRow={data => (
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  {data.route === "PetInfo" || "PetSitters" ? (
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={{
                        uri: data.icon
                      }}
                    />
                  ) : (
                    <Ionicons
                      active
                      name={data.icon}
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                  )}
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text style={styles.badgeText}>{`${
                        data.types
                      } Types`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
          <List
            dataArray={datas3}
            renderRow={data => (
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Ionicons
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text style={styles.badgeText}>{`${
                        data.types
                      } Types`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
