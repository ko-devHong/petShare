import React, { Component } from "react";
import { Image, View, Text, Platform } from "react-native";
import {
  Container,
  Header,
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

const cardOne = require("../../image/doginfo-5.png");
const cardTwo = require("../../image/doginfo-6.png");
const cardThree = require("../../image/doginfo-7.jpg");
const cardFour = require("../../image/doginfo-8.png");
const cardFive = require("../../image/doginfo-9.png");
const cardSix = require("../../image/doginfo-10.png");
const cardSeven = require("../../image/doginfo-11.png");
const cardEight = require("../../image/doginfo-12.png");
const cardNine = require("../../image/doginfo-13.png");
const topOne = require("../../image/top-1.png");
const nameimage = require("../../image/dogsad.png");
const nameimage2 = require("../../image/otl.png");

class DogInfo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: 0,
      swipedAllCards: false,
      swipeDirection: "",
      isSwipingBack: false,
      cards: [
        {
          text: "강아지",
          name: "강아지를 잘 키우려면?",
          image: cardOne,
          topImage: topOne
        },
        {
          text: "강아지 용품",
          name: "목줄 잘못하면 강아지가 아파요.",
          image: cardTwo,
          topImage: topOne,
          nameImage: nameimage
        },
        {
          text: "강아지 용품",
          name: "목줄",
          image: cardThree,
          topImage: topOne
        },
        {
          text: "강아지 장난감",
          name: "강아지는 물론 사람을 제일 좋아해요",
          image: cardFour,
          topImage: topOne
        },
        {
          text: "강아지 장난감",
          name: "장난감 공",
          image: cardFive,
          topImage: topOne
        },
        {
          text: "강아지 백팩",
          name: "잘 고려해서 사야되요.",
          image: cardSix,
          topImage: topOne
        },
        {
          text: "강아지 백팩",
          name: "백팩 예시",
          image: cardSeven,
          topImage: topOne
        },
        {
          text: "강아지 털갈이",
          name: "탈 관리안하면...집이..",
          image: cardEight,
          topImage: topOne,
          nameImage: nameimage2
        },
        {
          text: "강아지 털갈이",
          name: "수북수북~~",
          image: cardNine,
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
              <Text>{item.text}</Text>
              <Text note>키우는법</Text>
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
              Dog INFO
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

export default DogInfo4;
