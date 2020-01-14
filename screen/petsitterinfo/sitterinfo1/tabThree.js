import React, { Component } from "react";
import { Text, Card, CardItem, Body, Left, Thumbnail } from "native-base";
import { ScrollView, Image } from "react-native";

const topOne = require("../../../image/top-1.png");
const textImage = require("../../../image/textimage.png");

export default class TabThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              <Thumbnail source={topOne} />
              <Body>
                <Text
                  style={{
                    color: "#00a8ff",
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  맡아주셔서 감사합니다
                </Text>
                <Text note>2019.1.20 ~ 2019.1.21</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{
                resizeMode: "stretch",
                width: null,
                flex: 1,
                height: 300
              }}
              source={textImage}
            />
          </CardItem>
          <CardItem>
            <Text>
              맡아주셔서 감사합니다
              {"\n"}
              맡아주셔서 감사합니다
              {"\n"}
              맡아주셔서 감사합니다
              {"\n"}
            </Text>
          </CardItem>
        </Card>
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              <Thumbnail source={topOne} />
              <Body>
                <Text
                  style={{
                    color: "#00a8ff",
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  맡아주셔서 감사합니다
                </Text>
                <Text note>2019.1.20 ~ 2019.1.21</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{
                resizeMode: "stretch",
                width: null,
                flex: 1,
                height: 300
              }}
              source={textImage}
            />
          </CardItem>
          <CardItem>
            <Text>
              맡아주셔서 감사합니다
              {"\n"}
              맡아주셔서 감사합니다
              {"\n"}
              맡아주셔서 감사합니다
              {"\n"}
            </Text>
          </CardItem>
        </Card>
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              <Thumbnail source={topOne} />
              <Body>
                <Text
                  style={{
                    color: "#00a8ff",
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  맡아주셔서 감사합니다
                </Text>
                <Text note>2019.1.20 ~ 2019.1.21</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{
                resizeMode: "stretch",
                width: null,
                flex: 1,
                height: 300
              }}
              source={textImage}
            />
          </CardItem>
          <CardItem>
            <Text>
              맡아주셔서 감사합니다
              {"\n"}
              맡아주셔서 감사합니다
              {"\n"}
              맡아주셔서 감사합니다
              {"\n"}
            </Text>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}
