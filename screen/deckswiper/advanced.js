import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import Swiper from "react-native-deck-swiper";

const cardOne = require("../../image/doginfo-1.png");
const cardTwo = require("../../image/doginfo-2.png");
const cardThree = require("../../image/doginfo-3.png");
const cardFour = require("../../image/doginfo-4.png");

class AdvancedDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: 0,
      swipedAllCards: false,
      swipeDirection: "",
      isSwipingBack: false,
      cards: [
        {
          text: "Card One",
          name: "One",
          image: cardOne
        },
        {
          text: "Card Two",
          name: "Two",
          image: cardTwo
        },
        {
          text: "Card Three",
          name: "Three",
          image: cardThree
        },
        {
          text: "Card Four",
          name: "Four",
          image: cardFour
        }
      ]
    };
  }
  renderCard = (card, index) => {
    return (
      <Card style={{ elevation: 3, width: "100%" }}>
        <CardItem>
          <Left>
            <Thumbnail source={card.image} />
            <Body>
              <Text>{card.text}</Text>
              <Text note>NativeBase</Text>
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
          <Text>
            {card.name}-{index}
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
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Advanced Deck Swiper</Title>
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
        <View style={{ alignItems: "center", paddingTop: 20 }}>
          <Text style={{ fontWeight: "bold", color: "#d63031" }}>
            어느 방향이든 밀어서 넘기세요
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "center",
            padding: 15
          }}
        >
          <Button
            style={{ backgroundColor: "#0984e3" }}
            onPress={() => this.swiper.swipeBack()}
            title="Swipe Back"
          >
            <Icon name="arrow-back" />
            <Text>이전 페이지로</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default AdvancedDeck;
