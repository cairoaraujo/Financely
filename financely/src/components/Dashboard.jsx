import SideBar from "./SideBar";
import InfoBox from "./infoBox";
import styles from './Dashboard.module.css'
import Cards from './Cards'

const Dashboard = () =>{
    return <div className={styles.dashboard}>
        <InfoBox title = 'Budget'>
            <h1>Olá!</h1>
        </InfoBox>
        <InfoBox title = 'Cards'>
            <Cards></Cards>


        </InfoBox>
        <InfoBox title = 'Spendings'>

        </InfoBox>
        <InfoBox title = 'Incomes'>

        </InfoBox>
    </div>
}
export default Dashboard;