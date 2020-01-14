import { Platform } from "react-native";

export default {
  container: {
    backgroundColor: "#FFF"
  },
  headerTitle: {
    color: "#fff",
    fontSize: 17
  },
  header: {
    backgroundColor: "#74b9ff"
  },
  right: {
    position: "absolute",
    right: 1
  },
  touchableOpacity: {
    width: "90%",
    backgroundColor: "rgb(126, 119, 255)",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    borderRadius: 10
  },
  contentContainer: {
    paddingVertical: 20
  },
  textstyle: {
    marginLeft: 10,
    fontSize: 17
  },
  textinput: {
    borderBottomColor: "rgb(216, 216, 216)",
    borderBottomWidth: 2,
    marginLeft: 10,
    height: 40,
    width: Platform.OS === "ios" ? "70%" : "55%",
    paddingHorizontal: 10
  },
  addresstextinput: {
    borderBottomColor: "rgb(216, 216, 216)",
    borderBottomWidth: 2,
    marginLeft: 10,
    height: 40,
    width: Platform.OS === "ios" ? "60%" : "45%",
    paddingHorizontal: 10
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    marginRight: 10
  },
  text2: {
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "20%"
  },
  textCertified: {
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    width: Platform.OS === "ios" ? "30%" : "20%"
  }
};
