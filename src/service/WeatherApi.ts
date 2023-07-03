import axios from 'axios'

export const getWeather = async (lat: string, lng: string) => {
  try {
    const res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&hourly=precipitation,cloudcover`
    )
    return res.data
  } catch (err) {
    console.error(err)
  }
}
