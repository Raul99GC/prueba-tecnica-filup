import { create } from 'zustand'

export const usePokemonStore = create((set) => ({
  pokemon: {
    name: 'pika'
  },
  fetchPokemon: async (id) => {
    console.log(id)
  }
}))
