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
import { Text, Platform } from "react-native";
import styles from "./styles";

const datas = [
  {
    route: "DogInfo2",
    text: "강아지가 먹으면 안되는 음식"
  },
  {
    route: "DogInfo3",
    text: "강아지가 싫어하는 행동"
  },
  {
    route: "DogInfo4",
    text: "강아지 키우는법"
  }
];
class DogInfo extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "rgb(185, 142, 255)", height: 70 }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  fontSize: 35,
                  marginTop: Platform.OS === "ios" ? 0 : 15
                }}
                name="arrow-back"
              />
            </Button>
          </Left>
          <Body
            style={{
              paddingLeft: Platform.OS === "ios" ? 0 : 90,
              paddingTop: Platform.OS === "ios" ? 0 : 10
            }}
          >
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
              Dog INFO
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

export default DogInfo;
