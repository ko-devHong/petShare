import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Picker } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ImagePicker, Permissions } from "expo";
import ImageBrowser from "./ImageBrowser";
import styles from "./styles";

const Item = Picker.Item;
let owneraddress = 0;
export default class RegistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      image2: null,
      image3: null,
      imageBrowserOpen: false,
      photos: [],
      selected: undefined,
      selected2: undefined,
      selected3: undefined,
      owneraddresstext: null
    };
  }

  componentDidUpdate() {
    if (owneraddress == 1) {
      this.setState({
        owneraddresstext: this.props.navigation.state.params.owneraddresstext
      });
    }
    console.log("test");
    console.log(owneraddress);
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

  /** ㅇㅣ미지 불러오기 권한 */
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "회원 가입"
    };
  };

  /** ㅇㅣ미지 불러오기 함수들 */
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    alert(result.type);
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    alert(result.type);
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image2: result.uri });
    }
  };

  _pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    alert(result.uri);
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image3: result.uri });
    }
  };

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

  render() {
    owneraddress++;
    console.log("Ttttttttttt");
    console.log(owneraddress);
    let { image } = this.state;
    let { image2 } = this.state;
    let { image3 } = this.state;
    if (this.state.imageBrowserOpen) {
      return <ImageBrowser max={5} callback={this.imageBrowserCallback} />;
    }
    return (
      <KeyboardAvoidingView
        style={styles.container2}
        behavior="padding"
        enabled
      >
        <ScrollView>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                height: 250,
                resizeMode: "stretch",
                alignItems: "center",
                justifyContent: "center"
              }}
            />
          )}

          <View style={{ flex: 2 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text}>펫 사진</Text>
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
                    flexDirection: "row"
                  }
                ]}
                onPress={this._pickImage}
              >
                <Ionicons
                  name={"ios-add-circle"}
                  style={{ color: "rgb(126, 119, 255)", fontSize: 20 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>Email</Text>
              <TextInput
                style={styles.textinput}
                placeholder="회원 이름"
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.secondTextInput5.focus();
                }}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>비밀번호</Text>
              <TextInput
                style={styles.textinput}
                placeholder="회원 이름"
                returnKeyType={"next"}
                ref={input => {
                  this.secondTextInput5 = input;
                }}
                onSubmitEditing={() => {
                  this.secondTextInput6.focus();
                }}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>회원 이름</Text>
              <TextInput
                style={styles.textinput}
                placeholder="회원 이름"
                returnKeyType={"next"}
                ref={input => {
                  this.secondTextInput6 = input;
                }}
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
              />
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>주소</Text>
              <TextInput
                style={styles.addresstextinput}
                placeholder="주소"
                ref={input => {
                  this.secondTextInput = input;
                }}
                value={this.state.owneraddresstext}
              />
              <TouchableOpacity
                onPress={() => {
                  owneraddress = 0;
                  this.state.owneraddresstext = null;
                  this.props.navigation.navigate("OwnerGooglePlaces");
                }}
                style={{
                  width: "10%",
                  height: 30,
                  backgroundColor: "rgb(126, 119, 255)",

                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2
                }}
              >
                <Text style={{ color: "#fff" }}>선택</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>반려동물</Text>
              <TextInput
                style={styles.textinput}
                placeholder="반려동물 이름을 입력하세요"
                returnKeyType={"next"}
                ref={input => {
                  this.secondTextInput2 = input;
                }}
                onSubmitEditing={() => {
                  this.secondTextInput3.focus();
                }}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>펫 나이</Text>
              <TextInput
                style={styles.textinput}
                placeholder="펫나이를 입력하세요 예: 1살,2살"
                returnKeyType={"next"}
                ref={input => {
                  this.secondTextInput3 = input;
                }}
                onSubmitEditing={() => {
                  this.secondTextInput4.focus();
                }}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>예방접종</Text>
              <TextInput
                style={styles.textinput}
                placeholder="차수를 입력하세요 예: 1차,2차"
                ref={input => {
                  this.secondTextInput4 = input;
                }}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>펫 성별</Text>
              <Picker
                style={{
                  borderBottomColor: "rgb(216, 216, 216)",
                  borderBottomWidth: 2,
                  marginLeft: 10,
                  height: 40,
                  width: 240,
                  paddingHorizontal: 10
                }}
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
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>펫 몸무게</Text>
              <Picker
                style={{
                  borderBottomColor: "rgb(216, 216, 216)",
                  borderBottomWidth: 2,
                  marginLeft: 10,
                  height: 40,
                  width: "95%",
                  paddingHorizontal: 10
                }}
                mode="dropdown"
                placeholder="반려동물 무게를 선택해주세요"
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
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>중성화</Text>
              <Picker
                style={{
                  borderBottomColor: "rgb(216, 216, 216)",
                  borderBottomWidth: 2,
                  marginLeft: 10,
                  height: 40,
                  width: 240,
                  paddingHorizontal: 10
                }}
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
                flexDirection: "column",
                alignItems: "flex-start",
                padding: 5
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Text style={styles.textCertified}>혈통인증서</Text>

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
                      flexDirection: "row"
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

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ flexDirection: "row" }}>
                  {this.state.photos.map((item, i) =>
                    this.renderImage(item, i)
                  )}
                </View>
              </ScrollView>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text
                style={{
                  fontSize: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20%",

                  marginRight: 10
                }}
              >
                본인사진
              </Text>

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
                    flexDirection: "row"
                  }
                ]}
                onPress={this._pickImage2}
              >
                <Ionicons
                  name={"ios-add-circle"}
                  style={{ color: "rgb(126, 119, 255)", fontSize: 20 }}
                />
              </TouchableOpacity>
            </View>
            {image2 && (
              <Image
                source={{ uri: image2 }}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "stretch",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              />
            )}
            <View style={{ marginTop: 100 }}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 40,

                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgb(126, 119, 255)"
                }}
                onPress={() => {}}
              >
                <Text style={{ fontSize: 15, color: "#fff" }}>회원 등록</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
