import create from 'zustand'

const useStore = create(set => ({
  bears: 2,
  eventId : "",
  setEventId : (id) => set(state => ({eventId : id}))
}))

export default useStore;