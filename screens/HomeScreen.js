import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "black",
  },
  button: {
    marginTop: 20,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: "https://ncas.ac.uk/app/uploads/2020/05/Climate-Weather-Blue-Clouds-1280px.jpg" }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Hava Durumu Uygulamasına Hoşgeldin</Text>
        <Button
          title="Aramaya Başla"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
