import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Dimensions,
  Image,
  Animated,
  StyleSheet,
  TextInput,
  ImageBackground,
  Alert,
  FlatList,
  Button,
  ActivityIndicator
} from "react-native";
import { SearchBar, ListItem, List } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import sitterdata from "../components/sitterdata";

const { width, height } = Dimensions.get("window");

let all_sitters = [];
let list_content;
export default class PetSitters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sitterdata,
      datas: [],
      refreshing: false,
      loading: true,
      text: ""
    };
  }
  /*** 펫시터 목록 리턴하는 함수 */
  async componentDidMount() {
    const response = await fetch("http://13.209.69.225:3000/test/users2");
    const res = await response.json();
    all_sitters = res;
    this.setState({
      datas: res,
      loading: false
    });
  }

  /**** App.js default navigation 설정 */
  static navigationOptions = ({ navigation }) => {
    return {
      title: "펫시터 찾기",
      headerLeft: (
        <TouchableOpacity
          style={{ paddingLeft: 15 }}
          //dataArray={datas}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name={"ios-menu"} size={35} color={"#fff"} />
        </TouchableOpacity>
      ),

      headerRight: (
        <TouchableOpacity
          style={{ padding: 5, paddingRight: 15 }}
          onPress={() => navigation.navigate("Add")}
        >
          <Ionicons name={"ios-add"} size={35} color={"#fff"} />
        </TouchableOpacity>
      )
    };
  };

  showAlert(navigation, name) {
    Alert.alert(
      "이 펫시터와 거래 하시겠습니까?",
      //"데이터 입력",
      name + "펫시터",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate("info") }
      ],
      { cancelable: false }
    );
  }

  async filterSearch(text) {
    const newData = all_sitters.filter(function(item) {
      const itemData = item.address;
      const textData = text;
      console.log("item+++++" + itemData);
      console.log("texttttttt" + textData);
      console.log(itemData.indexOf(textData));
      return itemData.indexOf(textData) > -1;
    });

    console.log(newData);
    if (text.length <= 0) {
      await this.setState({
        datas: all_sitters,
        text: text
      });
    } else
      await this.setState({
        datas: newData,
        text: text
      });
  }

  refreshData = () => {};

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight style={styles.containerCell}>
        <View>
          <TouchableOpacity
            /* onPress={() => this.showAlert(this.props.navigation, item.by) } */
            onPress={() =>
              this.props.navigation.navigate("info", {
                text: item.by,
                userimage: item.imageUrl,
                petimage: item.petImageUrl,
                rating: item.rating,
                address: item.address,
                latitude: item.lat,
                longitude: item.lng
              })
            }
          >
            <Image
              style={{
                width: width,
                height: 180,
                resizeMode: "stretch"
              }}
              source={{ uri: item.petImageUrl }}
            />
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <View style={styles.imageUser}>
              <Image
                style={styles.imageAvatar}
                source={{ uri: item.imageUrl }}
              />
            </View>
            <View style={styles.footerTextContainer}>
              <Text style={styles.text}>{item.introduce}</Text>
              <Text style={[styles.text2, styles.textTitle]}>
                {item.address}
              </Text>
              <Text style={[styles.text2, styles.textBy]}>By {item.by}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.content,
              {
                width: width,
                backgroundColor: "#fff",
                flex: 1,
                transform: [
                  {
                    perspective: 450
                  }
                ]
              }
            ]}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </Animated.View>
        </View>
      );
    } else {
      if (this.state.datas.length <= 0) {
        list_content = (
          <View
            style={{
              alignItems: "center",
              marginTop: 30
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#6c5ce7" }}
            >
              검색결과가 없습니다.
            </Text>
          </View>
        );
      } else {
        list_content = (
          <FlatList
            style={styles.listContainer}
            onRefresh={this.refreshData}
            renderItem={this.renderItem}
            refreshing={this.state.refreshing}
            data={this.state.datas}
            keyExtractor={item => item.address}
          />
        );
      }
      return (
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.content,
              {
                width: width,
                backgroundColor: "#dfe4ea",
                flex: 1,
                transform: [
                  {
                    perspective: 450
                  }
                ]
              }
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <SearchBar
                onChangeText={text => this.filterSearch(text)}
                placeholder={"주소를 입력하세요"}
                value={this.state.text}
                lightTheme
                inputStyle={{ backgroundColor: "#fff" }}
                leftIconContainerStyle={{ backgroundColor: "#fff" }}
                inputContainerStyle={{ backgroundColor: "#fff" }}
                containerStyle={{ width: "100%" }}
              />
            </View>

            {list_content}
          </Animated.View>
        </View>
      );
    }
  }
}

const AddPetSitter =
  "https://postfiles.pstatic.net/MjAxOTAxMjFfMTQ0/MDAxNTQ4MDUyNjc3OTQ3.20_-hBWpSxf1tQrykCvq5Q2wxVm8lSemKvvl6nLWFVMg.H0MoL_pnaPYXgPBtQuEqb2Gv1eG65QV2aqsT9vfYieIg.PNG.dea972/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-01-21_%EC%98%A4%ED%9B%84_3.37.38.png?type=w966";

export class AddPetScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "Add PetSitter"
    };
  };

  render() {
    return (
      <View style={styles.container2}>
        <View style={{ alignItems: "center", paddingBottom: 50 }}>
          <ImageBackground
            style={{
              width: "100%",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
            source={{ uri: AddPetSitter }}
            imageStyle={{ opacity: 0.3 }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#fd79a8",
                fontWeight: "bold"
              }}
            >
              반려동물을 사랑으로
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Text
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center",
              width: "20%"
            }}
          >
            Sitter{"\n"}성명
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
              borderWidth: 2,
              height: 40,
              width: "70%",
              paddingHorizontal: 10,
              borderBottomColor: "rgb(216, 216, 216)",
              borderBottomWidth: 2
            }}
            placeholder="Sitter님 이름를 입력하세요"
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Text
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center",
              width: "20%"
            }}
          >
            한마디
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
              borderWidth: 2,
              height: 40,
              width: "70%",
              paddingHorizontal: 10,
              borderBottomColor: "rgb(216, 216, 216)",
              borderBottomWidth: 2
            }}
            placeholder="한줄로 설명해 주세요"
          />
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Text
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center",
              width: "20%"
            }}
          >
            금액
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
              borderWidth: 2,
              height: 40,
              width: "70%",
              paddingHorizontal: 10,
              borderBottomColor: "rgb(216, 216, 216)",
              borderBottomWidth: 2
            }}
            placeholder="가격을 입력하세요"
            keyboardType="number-pad"
          />
        </View>

        <View style={{ alignItems: "center", paddingTop: 50 }}>
          <TouchableOpacity
            style={{
              width: "88%",
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(126, 119, 255)"
            }}
            onPress={() => {}}
          >
            <Text style={{ fontSize: 18, color: "#fff" }}>펫시터 목록추가</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center"
  },
  textInput: {
    height: 30,
    borderWidth: 5,
    borderColor: "red",
    marginTop: 50,
    marginHorizontal: 10
  },
  content: {
    zIndex: 1
  },
  footerContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff"
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5
  },
  listContainer: {
    marginHorizontal: 10
  },
  text: {
    color: "black"
  },
  text2: {
    color: "gray"
  },
  containerCell: {
    marginBottom: 10
  },
  textTitle: {
    fontSize: 13
  },
  textBy: {
    fontSize: 12
  },
  textMenu: {
    fontSize: 20,
    color: "#fff"
  }
});
