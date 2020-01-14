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

const cardOne = require("../../image/catinfo-1.png");
const cardTwo = require("../../image/catinfo-2.png");
const cardThree = require("../../image/catinfo-3.png");
const cardFour = require("../../image/catinfo-4.png");
const cardFive = require("../../image/catinfo-5.png");
const cardSix = require("../../image/catinfo-6.png");
const cardSeven = require("../../image/catinfo-7.png");
const cardEight = require("../../image/catinfo-8.png");
const cardNine = require("../../image/catinfo-9.png");
const cardTen = require("../../image/catinfo-10.png");
const cardEleven = require("../../image/catinfo-11.png");
const topOne = require("../../image/cattop.png");

class CatInfo2 extends Component {
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
          name: "먹으면 안되는 음식이란?",
          image: cardOne,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "사람들은 고양이가 우유를 좋아한다고 ",
          name2: "생각합니다. 하지만 고양이는 유당을",
          name3: "소화시키지 못해요. 전용우유를 주세요",
          image: cardTwo,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "달걀 노른자는 고양이에게 좋은 영양소에요.",
          name2: "다만 흰자는 위험해요. 아비딘이 소화를 막아",
          name3: "피부염,결막염등 짋병을 유발 시켜요.",
          image: cardThree,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "날고기는 기생충 감염의 위험이 있습니다.",
          name2: "날생선은 비타민 결핍을 불러와서",
          name3: "신경계통에 문제를 불러 일으킬 수 있습니다.",
          image: cardFour,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "파, 마늘, 양파, 부추는 소량도 위험해요.",
          name2: "고양이의 적혈구를 파괴해서",
          name3: "혈뇨와 빈혈을 유발시킵니다.",
          image: cardFive,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "초콜릿은 '테오브로민' 중독물질이 있어요.",
          name2: "먹으면 구토, 설사,부정맥, 발작 등이",
          name3: "일어날 수 있습니다. 다크는 더 위험!!",
          image: cardSix,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "자일리톨은 아주 위험! 중독증을 일으킴.",
          name2: "인슐린 분비를 증가시켜 저혈당을 일으키며",
          name3: "동시에 간의 괴사를 불러옵니다.",
          image: cardSeven,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "카페인이 들어간 음료를 먹여선 안됩니다.",
          name2: "커피, 홍차, 녹차 등 페인은 소량만으로",
          name3: "고양의 심장과 신장에 큰 부담을 줍니다.",
          image: cardEight,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "포도는 신부전을 일으키는 과일입니다.",
          name2: "먹으면 신장에 영구적 손상을 입게 되므로",
          name3: "포도껍질이나 건포도 역시 주의!",
          image: cardNine,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "강아지,고양이를 둘다 키우는집에 해당되요",
          name2: "꼭 필요한 타우린이 포함되어 있지 않아",
          name3: "타우린 부족증에 걸릴 수 있습니다",
          image: cardTen,
          topImage: topOne
        },
        {
          text: "고양이",
          name: "치킨을 좋아하는 고양이들이 많습니다",
          name2: "하지만 치킨은 설사를 일으키고",
          name3: "닭뼈 때문에 위,목구멍이 손상되요.",
          image: cardEleven,
          topImage: topOne
        }
      ]
    };
  }
  renderCard = (card, index) => {
    return (
      <Card style={{ elevation: 3 }}>
        <CardItem>
          <Left>
            <Thumbnail source={card.topImage} />
            <Body>
              <Text
                style={{
                  color: "#d63031",
                  fontSize: 25,
                  fontWeight: "bold"
                }}
              >
                {card.text}
              </Text>
              <Text note>금지음식 리스트</Text>
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
            source={card.image}
          />
        </CardItem>
        <CardItem>
          <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />

          <Text style={{}}>
            {card.name}
            {"\n"}
            {card.name2}
            {"\n"}
            {card.name3}
            {"\n"}
          </Text>
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

export default CatInfo2;
