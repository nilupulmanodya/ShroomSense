import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import NaviBar from "../../../components/navibar/NaviBar";
import * as ImagePicker from "expo-image-picker";

const PickerScreen = ({ navigation, route }) => {
  const [image, setImage] = useState(null);

  const pickImageGallery = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      navigation.navigate("ResultScreen", {
        title: "Result",
        image: result.assets[0].uri,
      });
    }
  };

  const pickImageCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    // Explore the result
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      navigation.navigate("ResultScreen", {
        title: "Result",
        image: result.assets[0].uri,
      });
    }
  };

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
            // navigation.navigate("ResultScreen", { title: "Result" });
            pickImageCamera();
          }}
          style={styles.pickerButton}
        >
          <View style={styles.pickerButtonView}>
            <Image source={require("../../../assets/icons/camera.png")} />
          </View>
          <Text style={styles.pickerButtonTitle}>Pick from camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            pickImageGallery();
          }}
          style={styles.pickerButton}
        >
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
