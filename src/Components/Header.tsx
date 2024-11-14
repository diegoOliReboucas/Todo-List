import styles from './Header.module.css'
import Rocket from '../assets/Rocket.svg'

export function Header() {
    return (
    <header className={styles.header} >
            <img src={Rocket} alt="Logo da pagina" />
            <p>to<span>do</span></p>
    </header>
    )

}