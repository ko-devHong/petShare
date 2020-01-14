import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Platform,
  TextInput,
  Image,
  ScrollView
} from "react-native";
import { Picker } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ImagePicker, Permissions } from "expo";
import ImageBrowser from "./ImageBrowser";
import styles from "./styles";

/**** 픽커에 쓰이는 상수 */
const Item = Picker.Item;
/**** 숫자값 변경을 위한 변수 */
let sitteraddress = 0;
let introduceNumber = 0;
/**** 이미지 서버에 저장 상수 */
export default class SitterRegistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      image2: null,
      selected: undefined,
      selected2: undefined,
      selected3: undefined,
      introducetext: null,
      addresstext: null,
      sittername: ""
    };
  }

  /**** 자기소개 데이터 받아오기 */
  componentDidUpdate() {
    if (introduceNumber == 1) {
      this.setState({
        introducetext: this.props.navigation.state.params.text
      });
    }
    if (sitteraddress == 1) {
      this.setState({
        addresstext: this.props.navigation.state.params.addresstext
      });
    }
    //  console.log("test");
    //  console.log(sitteraddress);
  }

  /** ㅇㅣ미지 불러오기 권한 */
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  /*** 디폴트 네비게이션 옵션  */
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

  /***** 파일 서버에 보내기  */

  fileSend = () => {
    const apiUrl = "http://13.209.69.225:3000/upload";
    const uri = this.state.image;
    const uri2 = this.state.image2;
    const stringdata = {
      username: this.state.sittername,
      introduce: this.state.introducetext,
      addresstext: this.state.addresstext
    };
    const uriParts = uri.split(".");
    const fileType = uriParts[uriParts.length - 1];
    const formData = new FormData();

    formData.append("userfile", {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`
    });
    formData.append("userfile", {
      uri2,
      name: `photo2.${fileType}`,
      type: `image/${fileType}`
    });
    for (var k in stringdata) {
      formData.append(k, stringdata[k]);
    }

    const options = {
      method: "POST",
      body: formData,

      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
        // "Content-Type": "application/json"
      }
    };
    // console.log("test" + this.state.image2);
    //  console.log("image" + this.state.image);
    console.log("eeeeee" + fileType);
    //  console.log("gggggg" + JSON.stringify(options));
    return fetch(apiUrl, options)
      .then(response => response.json())
      .then(res => {
        alert(res.message);
      })
      .catch(err => {
        console.log(err);
      });
  };

  /***** Picker 데이터 값 가져오기 ****/
  sleactFunction = () => {
    if (this.state.selected == "key0") {
      return "하루치 정도 가지고 있음";
    } else if (this.state.selected == "key1") {
      return "일주일치 가지고있음";
    } else if (this.state.selected == "key2") {
      return "사료를 가지고 있지 않음";
    } else if (this.state.selected == "key3") {
      return "앞으로 구매예정";
    }
  };

  sleactFunction2 = () => {
    if (this.state.selected2 == "key0") {
      return "내 방안에서 재울예정";
    } else if (this.state.selected2 == "key1") {
      return "베란다에서 재울예정";
    } else if (this.state.selected2 == "key2") {
      return "거실에서 재울예정";
    } else if (this.state.selected2 == "key3") {
      return "내가 안고 자려고함";
    }
  };

  sleactFunction3 = () => {
    if (this.state.selected3 == "key0") {
      return "있음";
    } else if (this.state.selected3 == "key1") {
      return "없음";
    }
  };

  render() {
    sitteraddress++;
    introduceNumber++;
    console.log("이건 렌더야");
    console.log(sitteraddress);
    console.log(introduceNumber);
    let { image } = this.state;
    let { image2 } = this.state;
    if (this.state.imageBrowserOpen) {
      return <ImageBrowser max={5} callback={this.imageBrowserCallback} />;
    }
    return (
      <View style={styles.container2}>
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
              <Text style={styles.text}>대표 사진</Text>
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
              <Text style={styles.text2}>회원 이름</Text>
              <TextInput
                style={styles.textinput}
                placeholder="회원 이름을 입력하세요"
                returnKeyType={"next"}
                onChangeText={sittername => this.setState({ sittername })}
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
                value={this.state.sittername}
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
                value={this.state.addresstext}
              />
              <TouchableOpacity
                onPress={() => {
                  sitteraddress = 0;
                  this.state.addresstext = null;
                  this.props.navigation.navigate("GooglePlacesInput");
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
            {this.state.introducetext !== null ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5
                }}
              >
                <Text style={styles.text2}>자기소개</Text>
                <TouchableOpacity
                  style={{
                    borderBottomColor: "rgb(216, 216, 216)",
                    borderBottomWidth: 2,
                    marginLeft: 10,
                    width: Platform.OS === "ios" ? "70%" : "55%",
                    alignItems: "flex-start",
                    justifyContent: "space-around",
                    height: 40
                  }}
                  onPress={() => {
                    introduceNumber = 0;
                    this.state.text = null;
                    this.props.navigation.navigate("introduce");
                  }}
                >
                  <Text
                    style={{
                      color: "rgb(126, 119, 255)",
                      fontSize: 17,
                      marginLeft: 10
                    }}
                  >
                    작성완료
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5
                }}
              >
                <Text style={styles.text2}>자기소개</Text>
                <TouchableOpacity
                  style={{
                    borderBottomColor: "rgb(216, 216, 216)",
                    borderBottomWidth: 2,
                    marginLeft: 10,
                    width: Platform.OS === "ios" ? "70%" : "55%",
                    alignItems: "flex-start",
                    justifyContent: "space-around",
                    height: 40
                  }}
                  onPress={() => {
                    introduceNumber = 0;
                    this.state.text = null;
                    this.props.navigation.navigate("introduce");
                  }}
                >
                  <Text
                    style={{
                      color: "rgb(126, 119, 255)",
                      fontSize: 17,
                      marginLeft: 10
                    }}
                  >
                    자기소개 작성
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>사료 유무</Text>
              <Picker
                style={{
                  borderBottomColor: "rgb(216, 216, 216)",
                  borderBottomWidth: 2,
                  marginLeft: 5,
                  height: 40,
                  width: 250
                }}
                mode="dropdown"
                placeholder="사료 소지여부를 선택"
                placeholderStyle={{ color: "rgb(216, 216, 216)" }}
                note={false}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
                textStyle={{ color: "rgb(126, 119, 255)" }}
              >
                <Item label="하루치 정도 가지고 있음" value="key0" />
                <Item label="일주일치 가지고있음" value="key1" />
                <Item label="사료를 가지고 있지 않음" value="key2" />
                <Item label="앞으로 구매예정" value="key3" />
              </Picker>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>잠자리</Text>
              <Picker
                style={{
                  borderBottomColor: "rgb(216, 216, 216)",
                  borderBottomWidth: 2,
                  marginLeft: 5,
                  height: 40,
                  width: 250
                }}
                mode="dropdown"
                placeholder="반려동물을 재울 곳을 정하기"
                placeholderStyle={{ color: "rgb(216, 216, 216)" }}
                note={false}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                textStyle={{ color: "rgb(126, 119, 255)" }}
              >
                <Item label="내 방안에서 재울예정" value="key0" />
                <Item label="베란다에서 재울예정" value="key1" />
                <Item label="거실에서 재울예정" value="key2" />
                <Item label="내가 안고 자려고함" value="key3" />
              </Picker>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text2}>펫 유무</Text>
              <Picker
                style={{
                  borderBottomColor: "rgb(216, 216, 216)",
                  borderBottomWidth: 2,
                  marginLeft: 5,
                  height: 40,
                  width: 250
                }}
                mode="dropdown"
                placeholder="반려동물 유무 선택"
                placeholderStyle={{ color: "rgb(216, 216, 216)" }}
                note={false}
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange3.bind(this)}
                textStyle={{ color: "rgb(126, 119, 255)" }}
              >
                <Item label="있음" value="key0" />
                <Item label="없음" value="key1" />
              </Picker>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Text style={styles.text}>본인사진</Text>

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
            <View style={{ alignItems: "center", padding: 5 }}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 40,

                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgb(126, 119, 255)"
                }}
                onPress={this.fileSend.bind(this)}
              >
                <Text style={{ fontSize: 18, color: "#fff" }}>회원 등록</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
