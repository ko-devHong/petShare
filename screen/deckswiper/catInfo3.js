import React, { Component } from "react";
import { Image, View, Text, Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import Swiper from "react-native-deck-swiper";

const cardOne = require("../../image/catinfo-12.png");
const cardTwo = require("../../image/catinfo-13.png");
const cardThree = require("../../image/catinfo-14.png");
const cardFour = require("../../image/catinfo-15.png");
const cardFive = require("../../image/catinfo-16.png");
const cardSix = require("../../image/catinfo-17.png");
const cardSeven = require("../../image/catinfo-18.png");
const cardEight = require("../../image/catinfo-19.png");
const cardNine = require("../../image/catinfo-20.png");
const cardTen = require("../../image/catinfo-21.png");
const cardEleven = require("../../image/catinfo-22.png");
const topOne = require("../../image/top-1.png");

class CatInfo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: 0,
      swipedAllCards: false,
      swipeDirection: "",
      isSwipingBack: false,
      cards: [
        {
          text: "고양이",
          name: "고양이는 자기가 주인인거 아시죠?",
          image: cardOne,
          topImage: topOne
        },
        {
          text: "1.무시하기",
          name: "독립적인 성향으로 애정을 갈구하지않지만",
          name2: "그렇다고 무시해도 되는의미는 아니에요.",
          name3: "귀찮지 않을정도 적당한 관심을 원해요.",
          image: cardTwo,
          topImage: topOne
        },
        {
          text: "2.잦은 화장실 청소",
          name: "화장실을 너무 자주 청소해도 싫어해요",
          name2: "그렇지만 고양이는 깨끗한 동물이라",
          name3: "더러우면 자기가 안쓸거에요. 어렵죠?",
          image: cardThree,
          topImage: topOne
        },
        {
          text: "3.지나친 스킨쉽",
          name: "강아지는 만져주고 긁는걸 좋아하는 반면",
          name2: "고양이는 부드럽게 쓰다듬는걸 좋아해요.",
          image: cardFour,
          topImage: topOne
        },
        {
          text: "4.옷 입히기",
          name: "고양이들은 옷을 입으면 움직임이 불편할때",
          name2: "행동이 억제되고 매우 싫어해요",
          image: cardFive,
          topImage: topOne
        },
        {
          text: "5.차에 태워 이동하기",
          name: "대부분 고양이들은 차 타는것을 싫어해요.",
          name2: "차를 타면 초초,불안감등 증상이 보여요.",
          name3: "불가피한 경우 수의사와 미리 상의하세요.",
          image: cardSix,
          topImage: topOne
        },
        {
          text: "6.포즈 취하기",
          name: "SNS 하면서 고양이를 자랑하고 싶죠?",
          name2: "선천적으로 카메라를 좋아할수도 있지만",
          name3: "대부분은 마음처럼 포즈를 안할거에요",
          image: cardSeven,
          topImage: topOne
        },
        {
          text: "7.큰소리 내기",
          name: "성격이 예민한 고양이는 큰소리를 싫어해요.",
          name2: "큰소리에 깜짝 놀란 고양이가",
          name3: "손이 닿지 않는 곳으로 숨을 수 있어요.",
          image: cardEight,
          topImage: topOne
        },
        {
          text: "8.목에 방울 달기",
          name: "고양이는 느리지만 우아하게 움직여요.",
          name2: "그런데 목에 방울을 달면",
          name3: "다닐 때마다 자산이 노출된다고 생각해요.",
          image: cardNine,
          topImage: topOne
        },
        {
          text: "9.식사 습관 무시하기",
          name: "매우 까다로운 고양이는 식사취향이 있어요.",
          name2: "사료,식기,위치등 각자 취향이 확고해요.",
          name3: "조금씩 변화를 주며 '최상의조합'을 찾으세요.",
          image: cardTen,
          topImage: topOne
        },
        {
          text: "10.잘때 방해하기",
          name: "하루의 절반 이상을 잠자면서 보내는 고양이들",
          name2: "아무리 자는 시간이 많아도",
          name3: "그들의 꿀잠 시간을 방해하면 미움을 살 수 있어요.",
          image: cardEleven,
          topImage: topOne
        }
      ]
    };
  }
  renderCard = (item, index) => {
    return (
      <Card style={{ elevation: 3 }}>
        <CardItem>
          <Left>
            <Thumbnail source={item.topImage} />
            <Body>
              <Text
                style={{
                  color: "#d63031",
                  fontSize: 25,
                  fontWeight: "bold"
                }}
              >
                {item.text}
              </Text>
              <Text note>싫어하는 행동 리스트</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody style={{}}>
          <Image
            style={{
              resizeMode: "stretch",
              width: null,
              flex: 1,
              height: 300
            }}
            source={item.image}
          />
        </CardItem>
        <CardItem>
          <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />

          <Text>
            {item.name}
            {"\n"}
            {item.name2}
            {"\n"}
            {item.name3}
          </Text>

          <Image
            style={{
              resizeMode: "stretch",
              width: 80,
              height: 80
            }}
            source={item.nameImage}
          />
        </CardItem>
      </Card>
    );
  };

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

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
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>
              Cat INFO
            </Text>
          </Body>
          <Right />
        </Header>

        <View>
          <Swiper
            ref={swiper => {
              this.swiper = swiper;
            }}
            onSwiped={this.onSwiped}
            onSwipedLeft={() => this.onSwiped("left")}
            onSwipedRight={() => this.onSwiped("right")}
            onSwipedTop={() => this.onSwiped("top")}
            onSwipedBottom={() => this.onSwiped("bottom")}
            onTapCard={this.swipeLeft}
            cards={this.state.cards}
            cardIndex={this.props.cardIndex}
            cardVerticalMargin={80}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            showSecondCard={false}
            stackSize={3}
            stackSeparation={15}
            overlayLabels={{
              bottom: {
                title: "다음페이지",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "#fff",
                    color: "white",
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }
                }
              },
              left: {
                title: "다음페이지",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "#fff",
                    color: "white",
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: -30
                  }
                }
              },
              right: {
                title: "다음페이지",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "#fff",
                    color: "white",
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: 30
                  }
                }
              },
              top: {
                title: "다음페이지",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "#fff",
                    color: "white",
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }
                }
              }
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          />
        </View>
        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <Text style={{ fontWeight: "bold", color: "#d63031" }}>
            어느 방향이든 밀어서 넘기세요
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10
          }}
        >
          <Button
            style={{
              backgroundColor: "#0984e3",
              marginLeft: Platform.OS === "ios" ? 10 : 20
            }}
            onPress={() => this.swiper.swipeBack()}
            title="Swipe Back"
          >
            <Icon name="arrow-back" />
            <Text style={{ paddingRight: 10, color: "#fff" }}>
              이전 페이지로
            </Text>
          </Button>

          <Button
            style={{
              backgroundColor: "#0984e3",
              marginLeft: Platform.OS === "ios" ? "22%" : "20%"
            }}
            onPress={() => this.swiper.swipeLeft()}
          >
            <Text style={{ paddingLeft: 10, color: "#fff" }}>
              다음 페이지로
            </Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
}

export default CatInfo3;
