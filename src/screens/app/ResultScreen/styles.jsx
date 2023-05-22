import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  imageStyle: {
    resizeMode: "contain",
    height: hp(70),
    width: wp(100),
    alignSelf: "center",
    marginTop: hp(8),
  },
  title: {
    fontSize: RFValue(38),
    fontWeight: "600",
    marginTop: hp(7),
    marginBottom: hp(5),
    marginLeft: wp(5),
  },
  selectImageView: {
    height: wp(90),
    width: wp(90),
    alignSelf: "center",
  },
  selectImage: { borderRadius: 15, resizeMode: "contain" },
  imageTitle: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: wp(3),
    width: wp(80),
    height: hp(7),
    position: "absolute",
    bottom: wp(40),
    borderRadius: 15,
  },

  doneButton: {
    backgroundColor: "#19BA4F",
    alignSelf: "center",
    width: wp(30),
    height: hp(6),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,

    position: "absolute",
    bottom: hp(10),
  },
  doneButtonText: {
    fontSize: RFValue(20),
    fontWeight: "600",
    color: "#000",
  },
});
