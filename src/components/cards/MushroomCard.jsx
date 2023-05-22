import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { RFValue } from "react-native-responsive-fontsize";

const MushroomCard = (props) => {
  const { title, image, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={title ? false : true}
      style={styles.root}
    >
      {title ? <View style={styles.circle} /> : null}
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  root: {
    backgroundColor: "#D9D9D9",
    width: wp(38),
    height: hp(28),
    borderRadius: 30,
    marginLeft: wp(8.5),
    alignItems: "center",
    marginBottom: hp(4),
  },
  circle: {
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 50,
    width: wp(20),
    height: wp(20),
    top: hp(5.7),
  },
  image: {
    width: wp(24),
    height: hp(18),
    resizeMode: "contain",
  },
  title: {
    fontSize: RFValue(13),
    fontWeight: "600",
    textAlign: "center",
    width: wp(30),
  },
});

export default MushroomCard;
