import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import InfoBox from './components/infoBox';
import TesteProps from './components/testeProps'
import Tarefa from './components/tarefa'
import './index.css'
import styles from './App.module.css'
function App() {

  const userId = 1 //sets userId

  return (
      <>
        <div className={styles.Wrapper}>
          <SideBar></SideBar>
          <main>
            <h3>How r u doing, Cairo?</h3>
            <Dashboard></Dashboard>
          </main>
        </div>
      </>

  );
}

export default App;
