import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Entypo";

import { RFValue } from "react-native-responsive-fontsize";

const NaviBar = (props) => {
  const { title, onPressBack } = props;
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.button} onPress={onPressBack}>
        <Icon
          name="chevron-thin-left"
          size={55}
          color={"#000"}
          onPress={props.onPressBack}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#19BA4F",
    flexDirection: "row",
    alignItems: "center",
    height: hp(9),
  },
  button: {
    marginLeft: wp("2%"),
  },
  title: {
    marginLeft: wp(10),
    fontSize: RFValue(25),
  },
});

export default NaviBar;
