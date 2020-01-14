import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import styles from "./styles";

class IntroduceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }
  static navigationOptions = ({}) => {
    return {
      title: "자기소개"
    };
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={{ flex: 0.2, backgroundColor: "#b2bec3" }}>
          <Text style={{ marginTop: 10, marginLeft: 10 }}>
            간단한 자기를 어필할 수 있게 작성해주세요.{"\n"}
            100자 이내로 작성 부탁드립니다.
          </Text>
        </View>
        <Text
          style={{
            color: "rgb(126, 119, 255)",
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 20,
            marginLeft: 10
          }}
        >
          자기소개
        </Text>
        <TextInput
          maxLength={100}
          multiline={true}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          style={{
            borderColor: "rgb(126, 119, 255)",
            borderWidth: 2,
            marginLeft: 10,
            height: "50%",
            width: "90%",
            paddingHorizontal: 10,
            marginTop: 10
          }}
          placeholder="100자 이내로 입력해주세요"
        />
        <Text
          style={{
            marginLeft: 300,
            marginTop: 10,
            fontSize: 15,
            color: "rgb(126, 119, 255)"
          }}
        >
          {this.state.text.length + "/100"}
        </Text>
        <View
          style={{
            flex: 0.7,
            justifyContent: "flex-end"
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 10,
              width: "88%",
              height: 40,
              backgroundColor: "rgb(126, 119, 255)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20
            }}
            onPress={() =>
              this.props.navigation.navigate("sitterregist", {
                text: this.state.text
              })
            }
          >
            <Text style={styles.headerTitle}> 저장하기 </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default IntroduceScreen;
