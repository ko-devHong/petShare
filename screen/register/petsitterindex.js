import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  ListItem,
  CheckBox,
  Right,
  Body
} from "native-base";
import { View, TouchableOpacity, Alert, Text } from "react-native";
import styles from "./styles";

class RegistSitterCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCheckbox: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  }
  allToggleSwitch() {
    this.setState({
      allCheckbox: !this.state.allCheckbox
    });
  }

  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "회원가입 동의란"
    };
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <ListItem
            button
            onPress={() => {
              if (
                this.state.checkbox1 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox2 == false &&
                this.state.checkbox3 == false &&
                this.state.checkbox4 == false
              ) {
                console.log(this.state.checkbox1);
                console.log(this.state.checkbox2);
                this.toggleSwitch2();
                this.toggleSwitch3();
                this.toggleSwitch4();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox2 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox1 == false &&
                this.state.checkbox3 == false &&
                this.state.checkbox4 == false
              ) {
                this.toggleSwitch1();
                this.toggleSwitch3();
                this.toggleSwitch4();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox3 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox1 == false &&
                this.state.checkbox2 == false &&
                this.state.checkbox4 == false
              ) {
                this.toggleSwitch1();
                this.toggleSwitch2();
                this.toggleSwitch4();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox4 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox1 == false &&
                this.state.checkbox3 == false &&
                this.state.checkbox2 == false
              ) {
                this.toggleSwitch1();
                this.toggleSwitch3();
                this.toggleSwitch2();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == true &&
                this.state.checkbox2 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox3 == false &&
                this.state.checkbox4 == false
              ) {
                this.toggleSwitch3();
                this.toggleSwitch4();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == true &&
                this.state.checkbox3 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox2 == false &&
                this.state.checkbox4 == false
              ) {
                this.toggleSwitch2();
                this.toggleSwitch4();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == true &&
                this.state.checkbox4 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox3 == false &&
                this.state.checkbox2 == false
              ) {
                this.toggleSwitch3();
                this.toggleSwitch2();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == true &&
                this.state.checkbox2 == true &&
                this.state.checkbox3 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox4 == false
              ) {
                this.toggleSwitch4();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == true &&
                this.state.checkbox2 == true &&
                this.state.checkbox4 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox3 == false
              ) {
                this.toggleSwitch3();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == true &&
                this.state.checkbox4 == true &&
                this.state.checkbox3 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox2 == false
              ) {
                this.toggleSwitch2();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == false &&
                this.state.checkbox4 == false &&
                this.state.checkbox3 == false &&
                this.state.allCheckbox == false &&
                this.state.checkbox2 == false
              ) {
                this.toggleSwitch1();
                this.toggleSwitch2();
                this.toggleSwitch3();
                this.toggleSwitch4();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == true &&
                this.state.checkbox4 == true &&
                this.state.checkbox3 == true &&
                this.state.allCheckbox == true &&
                this.state.checkbox2 == true
              ) {
                this.toggleSwitch1();
                this.toggleSwitch2();
                this.toggleSwitch3();
                this.toggleSwitch4();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == false &&
                this.state.checkbox4 == true &&
                this.state.checkbox3 == false &&
                this.state.allCheckbox == false &&
                this.state.checkbox2 == false
              ) {
                this.toggleSwitch1();
                this.toggleSwitch2();
                this.toggleSwitch3();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == false &&
                this.state.checkbox4 == true &&
                this.state.checkbox3 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox2 == false
              ) {
                this.toggleSwitch1();
                this.toggleSwitch2();
                this.allToggleSwitch();
              } else if (
                this.state.checkbox1 == false &&
                this.state.checkbox4 == false &&
                this.state.checkbox3 == true &&
                this.state.allCheckbox == false &&
                this.state.checkbox2 == true
              ) {
                this.toggleSwitch1();
                this.toggleSwitch4();
                this.allToggleSwitch();
              }
            }}
          >
            <CheckBox
              checked={this.state.allCheckbox}
              onPress={() => {
                if (
                  this.state.checkbox1 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox2 == false &&
                  this.state.checkbox3 == false &&
                  this.state.checkbox4 == false
                ) {
                  console.log(this.state.checkbox1);
                  console.log(this.state.checkbox2);
                  this.toggleSwitch2();
                  this.toggleSwitch3();
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox2 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox1 == false &&
                  this.state.checkbox3 == false &&
                  this.state.checkbox4 == false
                ) {
                  this.toggleSwitch1();
                  this.toggleSwitch3();
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox3 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox1 == false &&
                  this.state.checkbox2 == false &&
                  this.state.checkbox4 == false
                ) {
                  this.toggleSwitch1();
                  this.toggleSwitch2();
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox4 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox1 == false &&
                  this.state.checkbox3 == false &&
                  this.state.checkbox2 == false
                ) {
                  this.toggleSwitch1();
                  this.toggleSwitch3();
                  this.toggleSwitch2();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == true &&
                  this.state.checkbox2 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox3 == false &&
                  this.state.checkbox4 == false
                ) {
                  this.toggleSwitch3();
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == true &&
                  this.state.checkbox3 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox2 == false &&
                  this.state.checkbox4 == false
                ) {
                  this.toggleSwitch2();
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == true &&
                  this.state.checkbox4 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox3 == false &&
                  this.state.checkbox2 == false
                ) {
                  this.toggleSwitch3();
                  this.toggleSwitch2();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == true &&
                  this.state.checkbox2 == true &&
                  this.state.checkbox3 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox4 == false
                ) {
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == true &&
                  this.state.checkbox2 == true &&
                  this.state.checkbox4 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox3 == false
                ) {
                  this.toggleSwitch3();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == true &&
                  this.state.checkbox4 == true &&
                  this.state.checkbox3 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox2 == false
                ) {
                  this.toggleSwitch2();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == false &&
                  this.state.checkbox4 == false &&
                  this.state.checkbox3 == false &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox2 == false
                ) {
                  this.toggleSwitch1();
                  this.toggleSwitch2();
                  this.toggleSwitch3();
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == true &&
                  this.state.checkbox4 == true &&
                  this.state.checkbox3 == true &&
                  this.state.allCheckbox == true &&
                  this.state.checkbox2 == true
                ) {
                  this.toggleSwitch1();
                  this.toggleSwitch2();
                  this.toggleSwitch3();
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == false &&
                  this.state.checkbox4 == true &&
                  this.state.checkbox3 == false &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox2 == false
                ) {
                  this.toggleSwitch1();
                  this.toggleSwitch2();
                  this.toggleSwitch3();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == false &&
                  this.state.checkbox4 == true &&
                  this.state.checkbox3 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox2 == false
                ) {
                  this.toggleSwitch1();
                  this.toggleSwitch2();
                  this.allToggleSwitch();
                } else if (
                  this.state.checkbox1 == false &&
                  this.state.checkbox4 == false &&
                  this.state.checkbox3 == true &&
                  this.state.allCheckbox == false &&
                  this.state.checkbox2 == true
                ) {
                  this.toggleSwitch1();
                  this.toggleSwitch4();
                  this.allToggleSwitch();
                }
              }}
            />
            <Body>
              <Text style={styles.textstyle}>모두 동의</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text style={styles.textstyle}>서비스 이용 동의</Text>
            </Body>
            <Right style={styles.right}>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("ServiceStack")}
              >
                <Text> 약관보기</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text style={styles.textstyle}>
                LovePet 보상 프로그램 이용 동의
              </Text>
            </Body>
            <Right style={styles.right}>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("SafeStack")}
              >
                <Text> 약관보기</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
              <Text style={styles.textstyle}>개인정보 취급 동의</Text>
            </Body>
            <Right style={styles.right}>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("PrivacyStack")}
              >
                <Text> 약관보기</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
              <Text style={styles.textstyle}>위치정보 활용 동의</Text>
            </Body>
            <Right style={styles.right}>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("GpsStack")}
              >
                <Text> 약관보기</Text>
              </Button>
            </Right>
          </ListItem>
        </Content>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 0.5
          }}
        >
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              if (
                this.state.checkbox1 &&
                this.state.checkbox2 &&
                this.state.checkbox3 &&
                this.state.checkbox4
              ) {
                this.props.navigation.navigate("sitterregist");
              } else Alert.alert("안내", "모두 체크 했는지 확인해주세요");
            }}
          >
            <Text style={styles.headerTitle}> 다음으로 </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default RegistSitterCheckbox;
