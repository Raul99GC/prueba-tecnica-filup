import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { usePokemonStore } from '../../store/pokemon.js'
import PdfButton from './components/pdfButton/PdfButton.jsx'

const PokeInfo = () => {
  const pokemon = usePokemonStore(state => state.pokemon)

  const [types, setTypes] = useState({
    type: '',
    secondType: ''
  })

  useEffect(() => {
    console.log({ pokemon })

    if (pokemon?.name) {
      setTypes({
        secondType: pokemon?.types[1]?.type.name,
        type: pokemon?.types[0].type.name
      })
    }
  }, [pokemon])

  const colorType = type => {
    if (types.type === 'fire' || types.type === 'fairy') return styles.colorCardRed
    if (types.type === 'water' || types.type === 'ice') return styles.colorCardBlue
    if (types.type === 'dragon' || types.type === 'flying') return styles.colorCardLightBlue
    if (types.type === 'normal' || types.type === 'steel' || type === 'fighting') return styles.colorCardGray
    if (types.type === 'rock' || types.type === 'ground') return styles.colorCardBrown
    if (types.type === 'bug' || types.type === 'grass') return styles.colorCardGreen
    if (types.type === 'poison' || types.type === 'ghost' || type === 'dark' || type === 'psychic') return styles.colorCardPurple
    if (types.type === 'electric' || types.type === 'ghost') return styles.colorCardYellow
  }

  return (
    <aside className={styles.pageCard}>

      {
        pokemon?.name
          ? <section className={styles.pageCardBox + ' flex'}>
            <div className={styles.pageCardContentImg}>
              <img className={styles.pageCardImg} src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </div>

            <div className={styles.pageCardName + ' flex'}>
              <h2 className={styles.pageCardH2Name}>{pokemon?.name}</h2>
            </div>

            <div className={styles.pageCardStats + ' flex'}>
              <progress min='0' max='150' value={pokemon?.stats[0].base_stat}></progress>
              <p className={styles.pageCardP}>Hp: {pokemon?.stats[0].base_stat}</p>

              <progress min='0' max='1000' value={pokemon?.base_experience}></progress>
              <p className={styles.pageCardP}>Experience: {pokemon?.base_experience}</p>
            </div>

            <div className={styles.pageCardTypes + ' flex'}>
              <span className={`${styles.type} ${colorType(types.type)}`}>{types.type}</span>
              {pokemon?.types[1] && <span className={`${styles.type} ${colorType(types.secondType)}`}>{types.secondType}</span>}
            </div>

            <div className={styles.pageCardStatsPoints + ' flex'}>
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className={styles.pageCardBoxPointStat + ' flex'}>
                  <div className={styles.pageCardBoxPoint + ' flex'}>
                    <p className={styles.pageCardPoint}>{pokemon?.stats[index].base_stat}</p>
                  </div>
                  <p className={styles.pageCardNamePoint}>{pokemon?.stats[index].stat.name}</p>
                </div>
              ))}
            </div>
            <PdfButton id={pokemon.id} />

          </section>
          : <img className={styles.loaderaImg} src="/public/images/whois.gif" alt="pokemon " />
      }

    </aside>
  )
}

export default PokeInfo
