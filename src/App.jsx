import styles from './App.module.css'
import PokeInfo from './pages/pokeInfo/PokeInfo'
import Pokedex from './pages/pokedex/Pokedex'

function App () {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <Pokedex />
          <PokeInfo />
        </div>
      </main>
    </>
  )
}

export default App
