import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
  Dimensions,
  Image,
  Animated,
  StyleSheet,
  TextInput,
  ImageBackground,
  Alert,
  FlatList
} from "react-native";
import { SearchBar, ListItem, List } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import ownerdata from "../components/ownerdata";

const { width, height } = Dimensions.get("window");

/*
const datas = [
  {
    name: "Registers",
    route: "Registers",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "PetSitters",
    route: "PetSitters",
    icon: "easel",
    bg: "#C5F442"
  }
];
*/

let all_owners = [];
let list_contents;
export default class PetOwners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerdata: [],
      refreshing: false,
      loading: true
    };
  }

  async componentDidMount() {
    const response = await fetch("http://13.209.69.225:3000/test/owners");
    const res = await response.json();
    console.log(res[0].by);
    console.log(res[0].imageUrl);
    all_owners = res;
    this.setState({
      ownerdata: res,
      loading: false
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "펫주인 찾기",
      headerLeft: (
        <TouchableOpacity
          style={{ paddingLeft: 15 }}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name={"ios-menu"} size={35} color={"#fff"} />
        </TouchableOpacity>
      ),

      headerRight: (
        <TouchableOpacity
          style={{ padding: 5, paddingRight: 15 }}
          onPress={() => navigation.navigate("Add2")}
        >
          <Ionicons name={"ios-add"} size={35} color={"#fff"} />
        </TouchableOpacity>
      )
    };
  };

  showAlert(navigation) {
    Alert.alert(
      "이 펫주인과",
      "거래 하시겠습니까?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate("Add2") }
      ],
      { cancelable: false }
    );
  }

  async filterSearch(text) {
    const newData = all_owners.filter(function(item) {
      const itemData = item.address.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    if (text.length <= 0) {
      await this.setState({
        ownerdata: all_owners,
        text: text
      });
    } else
      await this.setState({
        ownerdata: newData,
        text: text
      });
  }

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight style={styles.containerCell}>
        <View>
          <TouchableOpacity
            onPress={() => this.showAlert(this.props.navigation)}
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
            <View style={styles.petImageUrl}>
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
      if (this.state.ownerdata.length <= 0) {
        list_contents = (
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
        list_contents = (
          <FlatList
            style={styles.listContainer}
            onRefresh={this.refreshData}
            renderItem={this.renderItem}
            refreshing={this.state.refreshing}
            data={this.state.ownerdata}
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
            <SearchBar
              onChangeText={text => this.filterSearch(text)}
              placeholder={"주소를 입력하세요"}
              value={this.state.text}
              lightTheme
              containerStyle={{}}
              inputStyle={{ backgroundColor: "#fff" }}
              leftIconContainerStyle={{ backgroundColor: "#fff" }}
              inputContainerStyle={{ backgroundColor: "#fff" }}
            />
            {list_contents}
          </Animated.View>
        </View>
      );
    }
  }
}

const AddOwner = "https://t1.daumcdn.net/cfile/tistory/9998A7335A0F62EA13";

export class AddOwnerScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "Add Owner"
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
            source={{ uri: AddOwner }}
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
            Owner{"\n"}성명
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{
              borderBottomColor: "rgb(216, 216, 216)",
              borderBottomWidth: 2,
              height: 40,
              width: "70%",
              paddingHorizontal: 10
            }}
            placeholder="Owner님 이름를 입력하세요"
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
              borderBottomColor: "rgb(216, 216, 216)",
              borderBottomWidth: 2,
              height: 40,
              width: "70%",
              paddingHorizontal: 10
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
            주소
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{
              borderBottomColor: "rgb(216, 216, 216)",
              borderBottomWidth: 2,
              height: 40,
              width: "70%",
              paddingHorizontal: 10
            }}
            placeholder="주소를 입력하세요"
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
            가격:
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{
              borderBottomColor: "rgb(216, 216, 216)",
              borderBottomWidth: 2,
              height: 40,
              width: "70%",
              paddingHorizontal: 10
            }}
            placeholder="가격을 입력하세요"
            keyboardType="number-pad"
          />
        </View>

        <View style={{ alignItems: "center", padding: 5 }}>
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
            <Text style={{ fontSize: 18, color: "#fff" }}>펫주인 목록추가</Text>
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
