export const fetchWeatherData = async (city) => {
    try {
      const apiKey = "df6db88c903ab254ae85179f0c4d0a4a";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
   };