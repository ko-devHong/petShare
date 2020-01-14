import React, { Component } from "react";
import { Picker, Form, Text, Card, CardItem, Body, Left } from "native-base";
import { ScrollView } from "react-native";
import { MapView, Location, Permissions } from "expo";
import { AirbnbRating } from "react-native-ratings";
import sitterdata from "../../../components/sitterdata";

const Item = Picker.Item;

export default class TabOne extends Component {
  constructor(props) {
    super(props);
    const { sitterNames } = this.props;
    const { sitterRating } = this.props;
    const { sitterlatitude } = this.props;
    const { sitterlongitude } = this.props;
    this.state = {
      selected: undefined,
      selected2: undefined,
      selected3: undefined,
      reviews: [
        "별점: 1.0",
        "별점: 2.0",
        "별점: 3.0",
        "별점: 4.0",
        "별점: 5.0"
      ],
      rating: 1,
      mapRegion: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
    //  console.log("eeeeeee" + sampleProps);
    //  console.log("EEEEEEE" + this.props);
    //  console.log(JSON.stringify(this.props, null, 2));
  }
  /**  별선택 값 함수 */
  ratingCompleted(rating) {
    console.log(`Rating is: ${rating}`);
  }

  /**  선택 함수 */
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

  /**  지도 표현 함수 */
  /*
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied"
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });

    // Center the map on the location we just fetched.
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: []
    });
  };
  */

  componentDidMount() {
    // this._getLocationAsync();
    this.setState({
      mapRegion: {
        latitude: sitterlatitude,
        longitude: sitterlongitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  }

  render() {
    // const { sampleProps } = this.props;

    // console.log("TTTTTT" + sampleProps);
    // console.log("tttttt" + this.props);
    // console.log(JSON.stringify(this.props, null, 2));
    console.log("tttttttefe" + sitterlatitude);
    return (
      <ScrollView>
        <Form
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 10
          }}
        >
          <Text style={{ paddingBottom: 5 }}>{sitterNames + "펫시터"}</Text>
          <AirbnbRating
            count={5}
            reviews={this.state.reviews}
            size={15}
            style={{ textSize: 5 }}
            defaultRating={sitterRating}
            onFinishRating={this.ratingCompleted}
          />
        </Form>
        <Card>
          <CardItem>
            <Left>
              <Text style={{ flex: 0.4 }}>펫시팅 경험:</Text>
              <Body>
                <Picker
                  style={{ flex: 1 }}
                  mode="dropdown"
                  placeholder="경험 유무를 선택"
                  placeholderStyle={{ color: "#2874F0" }}
                  note={false}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Item label="한번도 경험이 없음" value="key0" />
                  <Item label="1~2회 경험" value="key1" />
                  <Item label="5~10회 경험" value="key2" />
                  <Item label="다수 경험" value="key3" />
                </Picker>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Text style={{ flex: 0.4 }}>사료 유무:</Text>

              <Body>
                <Picker
                  style={{ flex: 1 }}
                  mode="dropdown"
                  placeholder="사료 소지여부를 선택"
                  placeholderStyle={{ color: "#2874F0" }}
                  note={false}
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Item label="하루치 정도 가지고 있음" value="key0" />
                  <Item label="일주일치 가지고있음" value="key1" />
                  <Item label="사료를 가지고 있지 않음" value="key2" />
                  <Item label="앞으로 구매예정" value="key3" />
                </Picker>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Text style={{ flex: 0.4 }}> 잠자리:</Text>

              <Body>
                <Picker
                  style={{ flex: 1 }}
                  mode="dropdown"
                  placeholder="반려동물을 재울 곳을 정하기"
                  placeholderStyle={{ color: "#2874F0" }}
                  note={false}
                  selectedValue={this.state.selected3}
                  onValueChange={this.onValueChange3.bind(this)}
                >
                  <Item label="내 방안에서 재울예정" value="key0" />
                  <Item label="베란다에서 재울예정" value="key1" />
                  <Item label="거실에서 재울예정" value="key2" />
                  <Item label="내가 안고 자려고함" value="key3" />
                </Picker>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <Card>
          <CardItem style={{ alignItems: "center", justifyContent: "center" }}>
            <Text>집의위치</Text>
          </CardItem>
          <CardItem>
            <Body>
              <MapView
                style={{ height: 200, width: "100%" }}
                provider="google"
                region={this.state.mapRegion}
              />
              <Text>Location: {this.state.locationResult}</Text>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}
