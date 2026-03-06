import axios from "axios";

const GEO_URL = "https://api.api-ninjas.com/v1/geocoding";

export const getCoordinates = async (city: string) => {
  try {
    const response = await axios.get(GEO_URL, {
      params: {
        city: city,
        country: "India"
      },
      headers: {
        "X-Api-Key": process.env.GEOCODE_API_KEY
      }
    });

    console.log("Geocode API Response:", response.data);

    const location = response.data[0];

    return {
      latitude: location.latitude,
      longitude: location.longitude
    };

  } catch (error) {
    throw new Error("Error fetching coordinates");
  }
};