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
    route: "CatInfo2",
    text: "고양이가 먹으면 안되는 음식"
  },
  {
    route: "CatInfo3",
    text: "고양이가 싫어하는 행동"
  },
  {
    route: "CatInfo4",
    text: "고양이 키우는법"
  },
  {
    route: "AdvancedDeck",
    text: "ㅌㅔ스트"
  }
];
class CatInfo extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "rgb(185, 142, 255)", height: 70 }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="arrow-back"
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
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
              Cat INFO
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

export default CatInfo;
