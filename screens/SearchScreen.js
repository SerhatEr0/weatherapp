import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from "react-native";
import { fetchWeatherData } from "../api/weather";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  weatherText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const SearchScreen = ({ navigation }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://media.architecturaldigest.com/photos/6526cfff484a2bd295861382/4:3/w_908,h_681,c_limit/E02-1-1024x683.jpg" }}
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter a city"
          onChangeText={(text) => setCity(text)}
          value={city}
        />
        <Button title="Search" onPress={handleSearch} />
        {weatherData && (
          <View>
            <Text style={styles.weatherText}>
              {weatherData.name}, {weatherData.sys.country}: {weatherData.main.temp}°C
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default SearchScreen;
