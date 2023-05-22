import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import NaviBar from "../../../components/navibar/NaviBar";

const ResultScreen = ({ navigation, route }) => {
  const [test, setTest] = useState(true);
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

        <ImageBackground
          source={require("../../../assets/images/image1.png")}
          style={styles.selectImageView}
          imageStyle={styles.selectImage}
        >
          <Text
            style={[
              styles.imageTitle,
              {
                backgroundColor: test ? "#19BA4F" : "#F34848",
              },
            ]}
          >
            Grown enough to pick up
          </Text>
        </ImageBackground>

        <TouchableOpacity
          onPress={() => {
            setTest(!test);
          }}
          style={styles.doneButton}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ResultScreen;
