import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Profile extends Component {
  constructor (props){
    super(props)
    this.state={isEnabled:false,light_theme:true,profile_image:"",name:""}
  }
  toggleSwitch() { const previous_state = this.state.isEnabled; const theme = !this.state.isEnabled ? "dark" : "light"; var updates = {}; updates[ "/users/" + firebase.auth().currentUser.uid + "/current_theme" ] = theme; firebase .database() .ref() .update(updates); this.setState({ isEnabled: !previous_state, light_theme: previous_state }); }
  componentDidMount(){
    this.fetchUser()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
