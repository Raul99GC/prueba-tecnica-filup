import React from 'react'
import PropTypes from 'prop-types'

import styles from './pokeCard.module.css'
import { usePokemonStore } from '../../../../store/pokemon'

const PokeCard = ({ pokemon }) => {
  const fetchPokemon = usePokemonStore(state => state.fetchPokemon)

  const handleClick = (e) => {
    e.preventDefault()
    fetchPokemon(pokemon.id)
  }
  return (
    <section className={styles.container} onClick={handleClick}>
      <span className={styles.numPoke}># {pokemon.id}</span>
      <div className={styles.imgContainer}>
        <img src={pokemon?.img} alt="Pokemon Image" />
      </div>
      <p className={styles.name}>{pokemon.name}</p>
    </section>
  )
}

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokeCard
