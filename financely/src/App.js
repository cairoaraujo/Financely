import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import './index.css'
import styles from './App.module.css'
import Resume from './components/Resume'
function App() {

  const userId = 1 //sets userId

  return (
      <>
        <div className={styles.Wrapper}>
          <SideBar></SideBar>
          <main>
            <Resume></Resume>
            <Dashboard></Dashboard>
          </main>
        </div>
      </>

  );
}

export default App;
