import create from 'zustand'

const useStore = create(set => ({
  bears: 2,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore;