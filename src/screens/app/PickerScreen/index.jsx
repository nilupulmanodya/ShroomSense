import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import NaviBar from "../../../components/navibar/NaviBar";

const PickerScreen = ({ navigation, route }) => {
  return (
    <View style={styles.root}>
      <NaviBar
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <ImageBackground
        source={require("../../../assets/images/backgrountImage.png")}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.title}>{route.params.title}</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ResultScreen", { title: "Result" });
          }}
          style={styles.pickerButton}
        >
          <View style={styles.pickerButtonView}>
            <Image source={require("../../../assets/icons/camera.png")} />
          </View>
          <Text style={styles.pickerButtonTitle}>Pick from camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pickerButton}>
          <View style={styles.pickerButtonView}>
            <Image source={require("../../../assets/icons/gallery.png")} />
          </View>
          <Text style={styles.pickerButtonTitle}>Pick from gallery</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default PickerScreen;
