import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { connect } from "react-redux";

class Dashboard extends Component{
    render(){
        return(
            <View>
                <Text>This is Dashboard: {this.props.userToken}</Text>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      userToken: state.loginReducer.userToken,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      doLogin: (credentials) => {
        dispatch(loginAction(credentials));
      },
    };
  };


const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default DashboardContainer;
