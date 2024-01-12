import styles from './App.module.css'
import Pokedex from './pages/Pokedex'
// import { usePokemonStore } from './store/pokemon'

function App () {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <Pokedex />
        </div>
      </main>
    </>
  )
}

export default App
