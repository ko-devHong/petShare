import * as Expo from "expo";
import React, { Component } from "react";
import getTheme from "./theme/components";
import variables from "./theme/variables/commonColor";
import App from "./App";
import Roboto from "./node_modules/native-base/Fonts/Roboto.ttf";
import Roboto_medium from "./node_modules/native-base/Fonts/Roboto_medium.ttf";

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <this.state.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
