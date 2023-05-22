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
    fontWeight: "bold",
    marginTop: hp(7),
    marginBottom: hp(20),
    marginLeft: wp(5),
  },

  pickerButton: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    alignSelf: "center",
    alignItems: "center",
    width: wp(85),
    height: hp(7),
    borderRadius: 20,
    marginBottom: hp(3),
  },
  pickerButtonView: {
    backgroundColor: "#19BA4F",
    height: "100%",
    width: wp(20),
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",

    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderRightColor: "#A3A3A3",
    borderRightWidth: 5,
  },

  pickerButtonTitle: {
    fontSize: RFValue(18),
    marginLeft: wp(5),
  },
});
