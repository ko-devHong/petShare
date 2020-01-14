import React from "react";
import { TouchableOpacity, Text } from "react-native";

class RoundButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          {
            width: "90%",
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(126, 119, 255)"
          },
          this.props.style
        ]}
        onPress={this.props.onPress}
      >
        <Text style={{ fontSize: 17, color: "#fff" }}> {this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default RoundButton;
