import styles from './infobox.module.css'
import {useState, useEffect} from 'react'
import Teste from './Teste'

const InfoBox = ({title, children}) => {



    return <div className={styles.infobox}>   
        <h2>{title}</h2>
        {children}
    </div>
}

export default InfoBox;