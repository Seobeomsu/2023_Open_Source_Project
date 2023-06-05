import {create} from 'zustand'

const useStore = create(set => ({
  legioncode: null,
  activity: null,
  setlegioncode: (legioncode) => set(legioncode = {legioncode}),
  setactivity: (activity) => set(activity = {activity}),
}))

export default useStore