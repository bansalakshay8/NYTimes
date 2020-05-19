import loginReducer from "../src/reducers/loginReducer";
import * as types from "../src/actions/ActionTypes";

describe("login reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, {})).toEqual({
      loggedIn: false,
      error: "",
      userToken: "",
      loading: false,
    });
  });
  it("should handle login success", () => {
    let userToken = "fksdjahdkjsdhas";
    expect(
      loginReducer(
        {
          loggedIn: false,
          error: "",
          userToken: "",
          loading: true,
        },
        {
          type: types.LOGIN_SUC,
          payload: userToken,
        },
      ),
    ).toEqual({
      loggedIn: true,
      error: "",
      userToken: userToken,
      loading: false,
    });
  });
  it("should handle login failure", () => {
    let userToken = "fksdjahdkjsdhas";
    let error = "LOGIN FAILED";
    expect(
      loginReducer(
        {
          loggedIn: false,
          error: "",
          userToken: "",
          loading: true,
        },
        {
          type: types.LOGIN_FAL,
          payload: error,
        },
      ),
    ).toEqual({
      loggedIn: false,
      error: error,
      userToken: "",
      loading: false,
    });
  });
  it("should handle logout", () => {
    let userToken = "fksdjahdkjsdhas";
    let error = "LOGIN FAILED";
    expect(
      loginReducer(
        {
          loggedIn: false,
          error: "",
          userToken: "",
          loading: true,
        },
        {
          type: types.LOGIN_LOGOUT,
        },
      ),
    ).toEqual({
      loggedIn: false,
      error: "",
      userToken: "",
      loading: false,
    });
  });
});
