import React, { Component } from "react";
import {
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Thumbnail,
  Accordion
} from "native-base";

const dataArray = [
  { title: "5Kg 미만", content: "2 만원" },
  { title: "5Kg ~ 15Kg", content: "2 만 5천원" },
  { title: "15Kg 초과", content: "3 만원" }
];

const topOne = require("../../../image/top-1.png");

export default class TabTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content padder>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={topOne} />
              <Body>
                <Text
                  style={{
                    color: "#d63031",
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  자기소개
                </Text>
                <Text note>언제든 열심히 하겠습니다.</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Body>
              <Text>
                동물을 사랑하는 마음으로 전문적인 교육을 받고 펫시터를 시작하게
                되었습니다.견주님의 마음으로 반려동물을 친자식처럼 돌보겠습니다.
                {"\n"}
                다양한 반려동물들과 생활하면서 함께 힐링하고 소통하고 그들의
                생로병사를 지켜보며 생명의 야한함과 소중함을 깨달았습니다.
                {"\n"}
                반려동물의 커밍시그널을 바탕으로 불편함을 충분히 이해하고 욕구를
                충족시킬수 있게 최선을 다하겠습니다.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={topOne} />
              <Body>
                <Text
                  style={{
                    color: "#d63031",
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  펫시팅비용
                </Text>
                <Text note>부가세제외.</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Body style={{ alignItems: "center" }}>
              <Accordion
                style={{ width: "100%" }}
                dataArray={dataArray}
                expanded={0}
              />
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
