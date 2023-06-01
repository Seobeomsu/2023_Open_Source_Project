import {create} from 'zustand'

const useStore = create(set => ({
  bears: 0,
  legioncode: null,
  activity: null,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  setlegioncode: (code) => set(legioncode = {code}),
  setactivity: (activity) => set(activity = {activity})
}))

export default useStore