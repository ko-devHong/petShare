import React from "react";
import { TouchableOpacity, Text } from "react-native";

class TestButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          {
            width: "100%",
            height: 30,
            borderColor: "#fff",
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#74b9ff"
          },
          this.props.style
        ]}
        onPress={this.props.onPress}
      >
        <Text style={{ fontSize: 17, color: "#fff" }}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default TestButton;
