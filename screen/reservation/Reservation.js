import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Card,
  CardItem,
  Picker,
  Item,
  DatePicker
} from "native-base";
import {
  View,
  TouchableOpacity,
  Image,
  Linking,
  Text,
  Platform
} from "react-native";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import styles from "./styles";

var num = 0;
var day = 0;
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 2;
const options = ["Cancel", "바로 거래하기", "펫시터와 대화"];
const title = "바로 거래를 시작하실껀가요?";
const message =
  "대화 하기를 클릭시 펫시터 카톡방으로 링크 됩니다. 대화를 해보세요";
const userImage =
  "https://postfiles.pstatic.net/MjAxOTAxMTVfOTQg/MDAxNTQ3NTEyODU0NDk4.DcAvlx3CGY9pGFlgWZA7mIr6_SCt8h_gGaHYGAFlDIYg.bQ9kBiykOzlbxyIyQ3nTCO7lGw4NVmmIeDV7pz0OX94g.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-15_%EC%98%A4%EC%A0%84_9.28.54.png?type=w966";

class ReservationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePicker: false,
      chosenDate: "",
      isDatePicker2: false,
      chosenDate2: "",
      selected2: undefined,
      text: this.props.navigation.state.params.text,
      userimage: this.props.navigation.state.params.userimage,
      address: this.props.navigation.state.params.address,
      choseDatess: new Date(),
      receiveDatess: new Date(),
      priceSelect: undefined
    };
    this.showActionSheet = this.showActionSheet.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.setDate = this.setDate.bind(this);
    this.receiveSetDate = this.receiveSetDate.bind(this);
  }
  /*** 현재 쓰고있는 날짜 설정 함수 */
  setDate(newDate) {
    this.setState({ choseDatess: newDate });
  }

  receiveSetDate(newData) {
    this.setState({ receiveDatess: newData });
  }

  /** 날짜 설정 함수 */
  _showDateTimePicker = () => this.setState({ isDatePicker: true });

  _hideDateTimePicker = () => {
    this.setState({
      isDatePicker: false
    });
  };
  _handleDatePicked = date => {
    this.setState({
      isDatePicker: false,
      chosenDate: moment(date).format("YYYY, MMMM.Do")
    });
  };

  _showDateTimePicker2 = () => this.setState({ isDatePicker2: true });

  _hideDateTimePicker2 = () => {
    this.setState({
      isDatePicker2: false
    });
  };

  _handleDatePicked2 = date2 => {
    this.setState({
      isDatePicker2: false,
      chosenDate2: moment(date2).format("YYYY, MMMM.Do")
    });
  };

  changeText = isDatePicker => {
    //console.log(isDatePicker);
    if (num == 0) {
      num++;
      return "맡길날짜 선택";
    }
    num++;

    if (isDatePicker == false) {
      return this.state.chosenDate;
    }
  };

  changeText2 = isDatePicker2 => {
    //console.log(isDatePicker);
    if (num == 3 && day == 0) {
      day++;
      return "받을날짜 선택";
    }

    if (isDatePicker2 == false) {
      return this.state.chosenDate2;
    }
  };

  /** 가격 설정 함수 */
  onValueChange(value: string) {
    this.setState({
      selected2: value
    });
  }

  /** 거래하기 및 메세지 대화 */
  showActionSheet() {
    this.ActionSheet.show();
  }

  handleNavigation(options2) {
    if (options[options2] == "바로 거래하기") {
      this.props.navigation.navigate("TheEndScreen", {
        text: this.state.text,
        address: this.state.address,
        userimage: this.state.userimage,
        choseDatess: this.state.choseDatess,
        receiveDatess: this.state.receiveDatess,
        select: this.Test(this.state.selected2)
      });
    } else if (options[options2] == "펫시터와 대화") {
      Linking.openURL("https://open.kakao.com/o/sZVcolcb");
    }
  }

  /*** 테스트 함수 */
  Test = selected2 => {
    if (selected2 == "key0") {
      return 20000;
    } else if (selected2 == "key1") {
      return 25000;
    } else return 30000;
  };

  render() {
    selected22 = this.state.selected2;
    console.log(selected22);
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
            <Text style={styles.title}>날짜 선택</Text>
          </Body>
          <Right />
        </Header>
        <View style={styles.container2}>
          <View
            style={{
              width: "100%",
              height: 110,
              backgroundColor: "rgb(126, 119, 255)",
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <View
              style={{
                borderColor: "#fff",
                borderWidth: 3,
                height: 100,
                width: 100,
                borderRadius: 50,
                marginLeft: 10
              }}
            >
              <Image
                transparent
                source={{
                  uri: this.state.userimage
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 50
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ marginLeft: 20, fontSize: 25, color: "#fff" }}>
                {this.state.text + "펫시터"}
              </Text>
              <Text style={{ marginLeft: 20, fontSize: 17, color: "#fff" }}>
                {this.state.address}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: "rgb(126, 119, 255)",
              fontSize: 15,
              fontWeight: "bold"
            }}
          >
            맡길 날짜를 정해주세요.
          </Text>
          <Card
            style={{
              width: "100%",
              height: 170,
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <CardItem>
              <DatePicker
                defaultDate={new Date(2019, 1, 1)}
                minimumDate={new Date(2017, 1, 1)}
                maximumDate={new Date(2023, 12, 31)}
                locale={"ko"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="맡길날짜 선택"
                textStyle={{ color: "rgb(126, 119, 255)", fontSize: 17 }}
                placeHolderTextStyle={{ color: "rgb(216, 216, 216)" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </CardItem>
            <CardItem>
              <Text
                style={{
                  height: 30,
                  fontSize: 20
                }}
              >
                ~
              </Text>
            </CardItem>

            <CardItem>
              <DatePicker
                defaultDate={new Date(2019, 1, 1)}
                minimumDate={new Date(2017, 1, 1)}
                maximumDate={new Date(2023, 12, 31)}
                locale={"ko"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="받을날짜 선택"
                textStyle={{ color: "rgb(126, 119, 255)", fontSize: 17 }}
                placeHolderTextStyle={{ color: "rgb(216, 216, 216)" }}
                onDateChange={this.receiveSetDate}
                disabled={false}
              />
            </CardItem>
          </Card>

          <Text
            style={{
              color: "rgb(126, 119, 255)",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 20
            }}
          >
            강아지 가격을 정해주세요.
          </Text>
          <Card
            style={{
              width: "100%",
              height: 100,
              alignItems: "center"
            }}
          >
            <CardItem>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Kg당 가격"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="rgb(126, 119, 255)"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange.bind(this)}
                  textStyle={{ color: "rgb(126, 119, 255)" }}
                >
                  <Picker.Item label="5Kg 미만 2 만원" value="key0" />
                  <Picker.Item label="5Kg ~ 15Kg 2 만 5천원" value="key1" />
                  <Picker.Item label="15Kg 초과 3 만원" value="key2" />
                </Picker>
              </Item>
            </CardItem>
          </Card>

          <Text style={{ color: "black" }}>
            {this.Test(this.state.selected2)}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            {
              width: "100%",
              height: 50,
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(126, 119, 255)"
            }
          ]}
          onPress={this.showActionSheet}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold", color: "#fff" }}>
            다음으로
          </Text>
        </TouchableOpacity>
        <ActionSheet
          ref={o => {
            this.ActionSheet = o;
          }}
          title={title}
          message={message}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handleNavigation}
          styles={{ messageBox: { height: 60 } }}
        />
      </Container>
    );
  }
}

export default ReservationScreen;

/**       취소 확인이 있는 데이트 키퍼 하지만 값이 영어로 나옴
 * 
 * 
 *     <DateTimePicker
            isVisible={this.state.isDatePicker}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode={"date"}
            datePickerModeAndroid={"spinner"}
            cancelTextIOS={"취소"}
            confirmTextIOS={"확인"}
            cancelTextStyle={{ color: "#eb2f06", fontSize: 20 }}
            confirmTextStyle={{ color: "#3742fa", fontSize: 20 }}
          />
          <DateTimePicker
            isVisible={this.state.isDatePicker2}
            onConfirm={this._handleDatePicked2}
            onCancel={this._hideDateTimePicker2}
            mode={"date"}
            datePickerModeAndroid={"spinner"}
            cancelTextIOS={"취소"}
            confirmTextIOS={"확인"}
            cancelTextStyle={{ color: "#eb2f06", fontSize: 20 }}
            confirmTextStyle={{ color: "#3742fa", fontSize: 20 }}
          />

 */
