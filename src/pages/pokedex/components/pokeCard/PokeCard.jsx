import React from 'react'
import PropTypes from 'prop-types'

import styles from './pokeCard.module.css'

const PokeCard = ({ pokemon }) => {
  return (
    <section className={styles.container}>
      <span className={styles.numPoke}># {pokemon.id}</span>
      <div className={styles.imgContainer}>
        <img src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="Pokemon Image" />
      </div>
      <p className={styles.name}>{pokemon.name}</p>
    </section>
  )
}

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokeCard
