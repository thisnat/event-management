import create from 'zustand'

const useStore = create(set => ({
  bears: 2,
  eventId : "",
  setEventId : (id) => set(state => ({eventId : id})),
  eventData : {},
  setEventData : (data) => set(state => ({eventData : data})),
  user : {},
  setUser : (data) => set(state => ({user : data})),
}))

export default useStore;