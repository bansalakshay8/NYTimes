/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";

import IconF from "react-native-vector-icons/Fontisto";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/Ionicons";
import { Image } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";

import { regAction, resetRegAction } from "../actions/index";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fulluser: "",
      email: "",
      password: "",
    };
  }

  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View style={Styles.container}>
        <IconI
          name="md-arrow-round-back"
          size={25}
          color="black"
          style={{ position: 'absolute', top: 10,left:10 }}
          onPress={() => this.backPress()}
        />
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={this.props.regLoading}
          //Text with the Spinner
          textContent={"Registering user..."}
          //Text style of the Spinner Text
          textStyle={{ color: "#FFF" }}
        />

        <View style={Styles.logoStyle}>
          <Image
            source={require("../images/nyt_logo.png")}
            style={Styles.logoImgStyle}
          />
        </View>
        <View style={Styles.loginContainer}>
          <Text
            style={{ fontSize: 17, fontWeight: "bold", textAlign: "center" }}
          >
            Create Account
          </Text>
          <View style={Styles.inputWrap}>
            <View style={[Styles.iconWrap, { paddingHorizontal: 9 }]}>
              <IconFA name="user" size={16} color="white" />
            </View>
            <TextInput
              placeholder="Full Name"
              style={Styles.inputStyle}
              underlineColorAndroid="transparent"
              value={this.state.fulluser}
              onChangeText={(t) => {
                this.setState({ fulluser: t });
              }}
            ></TextInput>
          </View>
          <View style={Styles.inputWrap}>
            <View style={Styles.iconWrap}>
              <IconF name="email" size={16} color="white" />
            </View>
            <TextInput
              placeholder="Email"
              style={Styles.inputStyle}
              underlineColorAndroid="transparent"
              value={this.state.email}
              onChangeText={(t) => {
                this.setState({ email: t });
              }}
            ></TextInput>
          </View>
          <View style={Styles.inputWrap}>
            <View style={Styles.iconWrap}>
              <IconF name="key" size={16} color="white" />
            </View>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={Styles.inputStyle}
              underlineColorAndroid="transparent"
              value={this.state.password}
              onChangeText={(t) => {
                this.setState({ password: t });
              }}
            ></TextInput>
          </View>
          {this.props.regSuccessful != "" &&
          this.props.regError == "" &&
          this.props.regLoading == false ? (
            (Alert.alert("Registraction","Registration Successful",)),
            this.props.resetRegistration(),
            this.props.navigation.goBack()
          ) : (
            <Text style={{ color: "#b30000" }}>{this.props.regError}</Text>
          )}
          <TouchableOpacity
            style={Styles.loginBtnStyle}
            onPress={this.doRegister}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  doRegister = () => {
    this.props.regDispatch({
      email: this.state.email,
      password: this.state.password,
    });
  };
  backPress = () => {
    this.props.navigation.goBack();
  };
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#9a9a9a",
  },
  loginContainer: {
    padding: 15,
    width: "86%",
    // backgroundColor: "#c9cccf",
    borderRadius: 10,
    alignSelf: "center",
    // flex: 11,
    marginBottom: 30,
  },
  logoStyle: {
    alignSelf: "center",
    // flex: 7,
    justifyContent: "center",
    //   backgroundColor: "red",
  },
  logoImgStyle: {
    width: 140,
    height: 140,
    resizeMode: "contain",
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent",
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#c9cccf",
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 0,
    color: "black",
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b30000",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 0,
  },
  loginBtnStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#b30000",
    borderRadius: 10,
    alignSelf: "center",
    width: "100%",
  },
  regTxtStyle: {
    marginTop: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
});

const mapStateToProps = (state) => {
  return {
    regSuccessful: state.authReducer.regSuccessful,
    regError: state.authReducer.error,
    regLoading: state.authReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    regDispatch: (credentials) => {
      dispatch(regAction(credentials));
    },
    resetRegistration: () => {
      dispatch(resetRegAction());
    },
  };
};

const regContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
export default regContainer;
