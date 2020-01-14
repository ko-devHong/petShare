import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Picker,
  Item
} from "native-base";
import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { ImagePicker, Permissions } from "expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import sitterdata from "../../components/sitterdata";
import ImageBrowser2 from "./ImageBrowser2";

const petImage = "ios-add";
var num2 = 0;

class AddPetProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      data: sitterdata,
      text: "",
      agetext: "",
      ageData: sitterdata,
      text2: "",
      selected: undefined,
      selected2: undefined,
      selected3: undefined,
      imageBrowserOpen: false,
      photos: []
    };
  }

  /** 다중이미지 불러오기 */
  imageBrowserCallback = callback => {
    callback
      .then(photos => {
        console.log(photos);
        this.setState({
          imageBrowserOpen: false,
          photos
        });
      })
      .catch(e => console.log(e));
  };

  renderImage(item, i) {
    return (
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: item.file }}
        key={i}
      />
    );
  }

  /** 선택하기 */

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
  }

  /** 이미지 변경함수 */
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    alert(result.type);
    console.log(result);
    console.log(num2);
    num2 += 1;

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  /** 데이터 변경함수 */
  async filterSearch(text) {
    const newData = sitterdata.filter(function(item) {
      const itemData = item.address.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    await this.setState({
      data: newData,
      text: text
    });
  }

  async ageFilterSearch(agetext) {
    const _newData = sitterdata.filter(function(item) {
      const _itemData = item.address.toUpperCase();
      const _textData = agetext.toUpperCase();
      return _itemData.indexOf(_textData) > -1;
    });
    await this.setState({
      data: _newData,
      agetext: agetext
    });
  }

  refreshData = () => {};

  render() {
    let { image } = this.state;
    if (this.state.imageBrowserOpen) {
      return <ImageBrowser2 max={5} callback={this.imageBrowserCallback} />;
    }
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "rgb(185, 142, 255)", height: 70 }}>
          <Left>
            <TouchableOpacity
              style={{ padding: 5, paddingRight: 15 }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicons
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  fontSize: 35,
                  marginTop: Platform.OS === "ios" ? 0 : 15
                }}
                name="ios-arrow-back"
              />
            </TouchableOpacity>
          </Left>
          <Body
            style={{
              paddingLeft: Platform.OS === "ios" ? 0 : 90,
              paddingTop: Platform.OS === "ios" ? 0 : 10
            }}
          >
            <Text style={styles.title}>펫 추가하기</Text>
          </Body>
          <Right />
        </Header>

        <KeyboardAvoidingView
          style={styles.container2}
          behavior="padding"
          enabled
        >
          <ScrollView>
            <View style={styles.userprofile2}>
              <View style={styles.userimageborder2}>
                {num2 == 0 ? (
                  <Ionicons
                    transparent
                    name={petImage}
                    style={styles.petimage}
                  />
                ) : (
                  image && (
                    <Image
                      onPress={this._pickImage}
                      transparent
                      source={{ uri: image }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50
                      }}
                    />
                  )
                )}
              </View>
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity onPress={this._pickImage}>
                  <Text style={styles.useraddress3}>사진 선택하기</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                marginLeft: 10
              }}
            >
              <Text style={styles.infoname}>펫 이름</Text>
              <TextInput
                secureTextEntry={false}
                style={styles.infoinput}
                onChangeText={text => this.filterSearch(text)}
                placeholder={"변경할 이름을 입력하세요"}
                value={this.state.text}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 25,
                marginLeft: 10
              }}
            >
              <Text style={styles.infoname}>펫 나이</Text>
              <TextInput
                secureTextEntry={false}
                style={styles.infoinput}
                onChangeText={agetext => this.ageFilterSearch(agetext)}
                placeholder={"변경할 나이를 입력하세요"}
                value={this.state.agetext}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 25,
                marginLeft: 10
              }}
            >
              <Text style={styles.infoname}>예방접종</Text>
              <TextInput
                secureTextEntry={false}
                style={styles.infoinput}
                onChangeText={text2 => this.setState(text2)}
                placeholder={"변경할 접종차수를 입력하세요"}
                value={this.state.text2}
              />
            </View>
            <View style={styles.pickerview}>
              <Text style={styles.infoname}>펫 성별</Text>
              <Picker
                style={styles.pickerinput}
                mode="dropdown"
                placeholder="반려동물 성별 선택"
                placeholderStyle={{ color: "rgb(216, 216, 216)" }}
                note={false}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label="수컷" value="key0" />
                <Item label="암컷" value="key1" />
              </Picker>
            </View>
            <View style={styles.pickerview}>
              <Text style={styles.infoname}>펫 몸무게</Text>
              <Picker
                style={styles.pickerinput}
                mode="dropdown"
                placeholder="반려동물 무게 선택"
                placeholderStyle={{ color: "rgb(216, 216, 216)" }}
                note={false}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Item label="5Kg이하" value="key0" />
                <Item label="5Kg ~ 15Kg" value="key1" />
                <Item label="15Kg 초과" value="key2" />
              </Picker>
            </View>
            <View style={styles.pickerview}>
              <Text style={styles.infoname}>중성화 </Text>
              <Picker
                style={styles.pickerinput}
                mode="dropdown"
                placeholder="중성화 여부 선택"
                placeholderStyle={{ color: "rgb(216, 216, 216)" }}
                note={false}
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Item label="완료" value="key0" />
                <Item label="미완료" value="key1" />
              </Picker>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 25,
                marginLeft: 10
              }}
            >
              <Text style={styles.infoname}>혈통인증</Text>
              <TouchableOpacity
                style={[
                  {
                    width: "30%",
                    height: 30,
                    borderColor: "rgb(126, 119, 255)",
                    borderWidth: 1,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginLeft: 10
                  }
                ]}
                onPress={() => this.setState({ imageBrowserOpen: true })}
              >
                <Ionicons
                  name={"ios-add-circle"}
                  style={{ color: "rgb(126, 119, 255)", fontSize: 20 }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                marginTop={10}
              >
                <View style={{ flexDirection: "row" }}>
                  {this.state.photos.map((item, i) =>
                    this.renderImage(item, i)
                  )}
                </View>
              </ScrollView>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <TouchableOpacity style={styles.touchchange} onPress={() => {}}>
                <Text style={{ fontSize: 18, color: "#fff" }}>추가 하기</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default AddPetProfileScreen;
