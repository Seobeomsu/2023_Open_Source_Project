import {create} from 'zustand'

const useStore = create(set => ({
  legioncode: null,
  activity: null,
  homevisible: 1, // true
  setlegioncode: (legioncode) => set(legioncode = {legioncode}),
  setactivity: (activity) => set(activity = {activity}),
  sethomevisible: (homevisible) => set(homevisible = {homevisible}),
}))

export default useStore