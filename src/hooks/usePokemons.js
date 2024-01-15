import axios from 'axios'
import { useEffect, useState } from 'react'

const firstLink = 'http://localhost:8080/api/v1/pokemon'

const usePokemons = () => {
  const [pokemons, setPokemons] = useState({
    pokemons: [],
    nextPage: '',
    prevPage: '',
    totalPages: 0,
    totalCount: 0,
    link: ''
  })

  useEffect(() => {
    axios.get(firstLink)
      .then(({ data }) => {
        setPokemons({
          ...pokemons,
          pokemons: data.pokemons,
          nextPage: data?.pagination ? data.pagination.nextPage : '',
          prevPage: data?.pagination?.prevPage ? data.pagination.prevPage : '',
          totalPages: data?.pagination ? data?.pagination.totalPages : '',
          totalCount: data?.totalCount,
          link: firstLink
        })
      })
  }, [])

  const getPokemons = (link = '') => {
    setPokemons({
      pokemons: [],
      nextPage: '',
      prevPage: '',
      totalPages: 0,
      totalCount: 0,
      link: ''
    })

    axios.get(link)
      .then(({ data }) => {
        setPokemons({
          ...pokemons,
          pokemons: data.pokemons,
          nextPage: data?.pagination ? data.pagination.nextPage : '',
          prevPage: data?.pagination?.prevPage ? data.pagination.prevPage : '',
          totalPages: data?.pagination ? data?.pagination.totalPages : '',
          totalCount: data?.totalCount,
          link
        })
      })
  }

  return {
    ...pokemons,
    getPokemons
  }
}

export default usePokemons
