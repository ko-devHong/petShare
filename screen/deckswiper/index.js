import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Content,
  List,
  ListItem
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Text, Platform } from "react-native";
import styles from "./styles";

const datas = [
  {
    route: "DogInfo",
    text: "강아지에 대한 필수정보"
  },
  {
    route: "CatInfo",
    text: "고양이에 대한 필수정보"
  }
];
class PetinfoScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "rgb(185, 142, 255)", height: 70 }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("펫시터")}
            >
              <Ionicons
                name="ios-arrow-back"
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  fontSize: 35,
                  marginTop: Platform.OS === "ios" ? 0 : 15
                }}
              />
            </Button>
          </Left>
          <Body
            style={{
              paddingLeft: Platform.OS === "ios" ? 0 : 90,
              paddingTop: Platform.OS === "ios" ? 0 : 10
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                fontWeight: "bold"
              }}
            >
              PET INFO
            </Text>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>{data.text}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default PetinfoScreen;
