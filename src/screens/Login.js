/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import IconF from "react-native-vector-icons/Fontisto";
import { Image } from "react-native-elements";
import { connect } from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';

import {resetLoginAction,loginAction} from '../actions'


export class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  static navigationOptions = {
    // header: null,
    headerShown: false,
  };
  gotoRegPage = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    return (
      <View style={Styles.container}>

        <Spinner
          //visibility of Overlay Loading Spinner
          visible={this.props.loading}
          //Text with the Spinner 
          textContent={'Signing in...'}
          //Text style of the Spinner Text
          textStyle={{color: '#FFF',}}
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
            Sign into your Account
          </Text>
          <View style={Styles.inputWrap}>
            <View style={Styles.iconWrap}>
              <IconF name="email" size={16} color="white" />
            </View>
            <TextInput
              placeholder="Email"
              style={Styles.inputStyle}
              underlineColorAndroid="transparent"
              value={this.state.email}
              onChangeText={(t)=>{
                this.setState({email:t})
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
              onChangeText={(t)=>{
                this.setState({password:t})
              }}
            ></TextInput>
          </View>
          {this.props.error == "" &&
          this.props.loading == false &&
          this.props.loggedIn == true &&
          this.props.userToken != "" ? (
            this.props.navigation.navigate('Dashboard')
          ) : (<Text style={{color: '#b30000'}}>{this.props.error}</Text>
          )}
          <TouchableOpacity style={Styles.loginBtnStyle} onPress={this.loginPressed}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              Login
            </Text>
          </TouchableOpacity>
          <View style={Styles.regTxtStyle}>
            <Text>Don't have an account? </Text>
            <Text
              style={{ textDecorationLine: "underline" }}
              onPress={this.gotoRegPage}
            >
              Register Now!
            </Text>
          </View>
        </View>
      </View>
    );
  }
  loginPressed=()=>{
    this.props.doLogin({
      email:this.state.email,
      password:this.state.password
    })
  }
  componentDidMount() {
    this.blurListener = this.props.navigation.addListener("didBlur", () => {
      this.props.doReset();
    });
  }
  componentWillUnmount() {
    this.blurListener.remove();
  }
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
    loggedIn: state.loginReducer.loggedIn ,
    error: state.loginReducer.error,
    userToken: state.loginReducer.userToken,
    loading: state.loginReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (credentials) => {
      dispatch(loginAction(credentials));
    },
    doReset: () => {
      dispatch(resetLoginAction());
    },
  };
};

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default loginContainer;
