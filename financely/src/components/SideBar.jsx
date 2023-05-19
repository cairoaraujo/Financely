import styles from './SideBar.module.css'

const SideBar = () => {

    return <div className={styles.SideBar}>
        <img className={styles.mainLogo} src="mainLogo.png"></img>
            <ul className={styles.menu}>
                <li>
                    <a href="#"> Início</a>
                </li>
                <li>
                    <a href="#"> Cartões</a>
                </li>
                <li>
                    <a href="#"> Perfil</a>
                </li>
                <li>
                    <a href="#"> Sair</a>
                </li>
            </ul>
    </div>
}

export default SideBar;