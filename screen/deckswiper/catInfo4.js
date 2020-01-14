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

const cardOne = require("../../image/catinfo-23.png");
const cardTwo = require("../../image/catinfo-24.png");
const cardThree = require("../../image/catinfo-25.png");
const cardFour = require("../../image/catinfo-26.png");
const cardFive = require("../../image/catinfo-27.png");
const cardSix = require("../../image/catinfo-28.png");
const cardSeven = require("../../image/catinfo-29.png");
const cardEight = require("../../image/catinfo-30.png");
const cardNine = require("../../image/catinfo-31.png");
const topOne = require("../../image/top-1.png");

class CatInfo4 extends Component {
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
          name: "고양이를 잘 키우려면?",
          image: cardOne,
          topImage: topOne
        },
        {
          text: "고양이 배변훈련",
          name: "하루에 한번씩 아가들의 맛동산을 정리해주세요.",
          image: cardTwo,
          topImage: topOne
        },
        {
          text: "고양이 배변훈련",
          name: "배변 훈련법",
          image: cardThree,
          topImage: topOne
        },
        {
          text: "고양이 용품",
          name: "냥이들을 키우기 위해서는 용품들도 있어야 겠지요??",
          nmae2: "가장 기본적으로 필요한것들을 알려드리자면!",
          image: cardFour,
          topImage: topOne
        },
        {
          text: "고양이 용품",
          name: "가장 중요한 사료와식기, 화장실+모래",
          nmae2: "고양이 키우기 가장 필수인 캣타워",
          name3: "이외에 빗+귀세정제+발톱깍이+냥이캔등",
          image: cardFive,
          topImage: topOne
        },
        {
          text: "고양이와 교감",
          name: "서로 교감을 나눠볼까요?",
          image: cardSix,
          topImage: topOne
        },
        {
          text: "고양이와 교감",
          name: "고양이도 산책이 가능하지만 교감이 중요",
          nmae2: "냥이들과 낚시대로 놀아주는 방법과",
          name3: "좋아하는 부위 목+턱+엉덩이 궁디팡팡~",
          image: cardSeven,
          topImage: topOne
        },
        {
          text: "고양이 예방접종",
          name: "예방접종 외에 정기검진도 필요해요.",
          image: cardEight,
          topImage: topOne
        },
        {
          text: "고양이 예방접종",
          name: "고양이는 6~8주 정도 종합백신 접종해야되요.",
          nmae2: "맞기전 백혈병,면역부전 바이러스 검사",
          name3: "종합 백신도 3주간격으로 3차까지 접종해야되요.",
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
              <Text
                style={{
                  color: "#d63031",
                  fontSize: 25,
                  fontWeight: "bold"
                }}
              >
                {item.text}
              </Text>
              <Text note>키우는 방법</Text>
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

export default CatInfo4;
