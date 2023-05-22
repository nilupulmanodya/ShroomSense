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
  titleContainer: {
    backgroundColor: "#19BA4F",
    height: hp(50),
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
  },
  title: {
    marginTop: hp(20),
    color: "#000",
    fontSize: RFValue(40),
    fontWeight: "bold",
  },
  flatList: {
    position: "absolute",
    top: hp(35),
  },
  listContainer: {},
});
