import styles from './CreatedTasks.module.css'
import  Clipboard  from '../assets/Clipboard.svg'

export function CreatedTasks() {
    return (
            <div className={styles.emptyTasksContainer}>
             <img src={Clipboard} alt="Imagem do ClipBoard" />
             <div className={styles.Paragrafos}>
                <p className={styles.paragrafoStrong}>Você ainda nao tem tarefas cadastradas</p>
                <p className={styles.paragrafoThin}>Crie tarefas e organize seus itens a fazer</p>
             </div>
            </div>
    )
}