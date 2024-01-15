import { create } from 'zustand'
import axios from 'axios'

export const usePokemonStore = create((set) => ({
  pokemon: {},
  fetchPokemon: async (id) => {
    const { data } = await axios.get(`http://localhost:8080/api/v1/pokemon/${id}`)
    console.log({ data })
    set({ pokemon: data })
  }
}))
