import styles from './Resume.module.css'

const Resume = () =>{

    return (
        <main className={styles.main}>
        <h2> Resume</h2>
        <div className={styles.resumeContainer}>
            <div className={styles.incomes}></div>
            <div className={styles.spends}></div>
            <div className={styles.budget}></div>
        </div>
        </main>
    )
}
export default Resume;