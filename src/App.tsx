import './global.css'
import { Header } from './Components/Header'
import { Task } from './Components/Task'
import styles from './App.module.css'

function App() {

  return (
    <>
    <Header />

    <div className={styles.taskContent}>
      <Task />
    </div>
   
    </>
  )
}

export default App
