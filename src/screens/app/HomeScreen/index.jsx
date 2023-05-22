import { View, Text, FlatList, StatusBar } from "react-native";
import React from "react";
import { styles } from "./styles";
import MushroomCard from "../../../components/cards/MushroomCard";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar translucent={false} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ShroomSense</Text>
      </View>
      <FlatList
        data={mushrooms}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        style={styles.flatList}
        renderItem={({ item, index }) => (
          <MushroomCard
            onPress={() =>
              navigation.navigate("PickerScreen", { title: item.name })
            }
            title={item.name}
            image={item.image}
            key={index}
          />
        )}
      />
    </View>
  );
};

const mushrooms = [
  {
    name: "Check Mushroom Status",
    image: require("../../../assets/images/mushrooms/mushroom1.png"),
  },
  {
    name: "Poisonous/Edible mushroom detection",
    image: require("../../../assets/images/mushrooms/mushroom2.png"),
  },
  {},
  {},
];
export default HomeScreen;
