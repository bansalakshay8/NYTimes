import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";
import IconF from "react-native-vector-icons/Fontisto";
import SearchFromTab from "../components/SearchFromTab";

class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      shouldShow: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          value={this.state.searchTerm}
          onChangeText={(t) => this.searchChanged(t)}
          clearIcon={{
            iconStyle: { margin: 10 },
            containerStyle: { margin: -10 },
          }}
          searchIcon={{ size: 20 }}
          placeholder="Search news"
          containerStyle={styles.searchContainerStyle}
          inputContainerStyle={styles.searchInputContainerStyle}
          inputStyle={styles.searchInputStyle}
        />
        {this.state.shouldShow && (
          <SearchFromTab
            searchTerm={this.state.searchTerm}
          />
        )}
      </View>
    );
  }

  searchChanged = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
      shouldShow: true,
    });
  };

  componentDidMount() {
    const { navigation } = this.props;
    //   this.focusListener = navigation.addListener("didFocus", () => {
    //     this.setState({
    //       shouldShow: true,
    //     });
    //   });
    this.blurListener = navigation.addListener("didBlur", () => {
      this.setState({
        searchTerm: "",
      });
    });
  }
  componentWillUnmount() {
    this.focusListener.remove();
    this.blurListener.remove();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent:'center',
    backgroundColor: "#9a9a9a",
  },
  searchInputStyle: {
    color: "#000",
  },
  searchInputContainerStyle: {
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 10,
  },
  searchContainerStyle: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#9a9a9a",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    // backgroundColor:'green'
  },
});

export default SearchTab;
