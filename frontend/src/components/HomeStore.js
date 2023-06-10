import {create} from 'zustand'

const useStore = create((set) => ({
  legioncode: [],
  activity: [],
  setlegioncode: (data) => set({ legioncode: data }),
  setactivity: (data) => {set({activity : data})}                 
}))

export default useStore