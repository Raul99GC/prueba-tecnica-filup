import styles from './pokedex.module.css'
import useForm from '../../hooks/useForm'

import { FaSearch } from 'react-icons/fa'
import PokeCard from './components/pokeCard/PokeCard'
import Pagination from './components/pagination/Pagination'
import usePokemons from '../../hooks/usePokemons'

const Pokedex = () => {
  const { onInputChange, pokemonSearch, itemsPerPage } = useForm({
    pokemonSearch: '',
    itemsPerPage: 10
  })

  const { getPokemons, nextPage, pokemons, prevPage, totalPages } = usePokemons()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!pokemonSearch) return

    getPokemons(`http://localhost:8080/api/v1/pokemon?name=${pokemonSearch}&&limit=${itemsPerPage}&page=1`)
  }

  const onClickPagination = (link) => {
    console.log({ link })
    getPokemons(link)
  }

  return (
    <>
      <div className={styles.podekexContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.searchInpt}
            type="text"
            placeholder='Buscar Pokemon'
            value={pokemonSearch}
            name='pokemonSearch'
            onChange={onInputChange}
          />
          <button type="submit" className={styles.searchBtn}>
            <FaSearch />
          </button>

          <label>
            Items x pagina:
            <select
              value={itemsPerPage}
              onChange={onInputChange}
              name='itemsPerPage'
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </label>
        </form>

        <Pagination totalPags={totalPages || 1}
          onClickPagination={onClickPagination}
          pagination={ { nextPage, prevPage }}
        />

        <div className={styles.pokemons}>

          {
            pokemons?.length > 0
              ? pokemons.map((pokemon) => (
                <PokeCard key={pokemon.id} pokemon={pokemon} />
              ))
              : <div className="">
                Esperando todos los pokemones
                <img src="/images/pikawaiting.gif" alt="pokemon " />
              </div>
          }

        </div>

      </div>
    </>
  )
}

export default Pokedex
