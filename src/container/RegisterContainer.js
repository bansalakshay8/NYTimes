import Register from "../screens/Register";
import { regUser } from "../actions";
import { connect } from "react-redux";
// import {redContext} from '../../index';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    regDispatch: (credentials) => {
        console.log(`username is :${credentials.email} ${credentials.password}`);
      dispatch(regUser(credentials));
    },
  };
};

const regContainer = connect(mapStateToProps, mapDispatchToProps,null)(Register);
export default regContainer;
