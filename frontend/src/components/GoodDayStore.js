import {create} from 'zustand'

const GoodDayStore = create(set => ({
  placedata: null,
  weatherdata: null,
  SetPlaceData: (placedata) => set(placedata = {placedata}),
  SetWeatherData: (weatherdata) => set(weatherdata = {weatherdata}),
}))

export default GoodDayStore