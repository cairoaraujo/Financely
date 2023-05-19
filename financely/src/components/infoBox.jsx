import styles from './infobox.module.css'
import {useState, useEffect} from 'react'

const InfoBox = ({title, children}) => {



    return <div className={styles.infobox}>   
        <h3>{title}</h3>
        {children}
    </div>
}

export default InfoBox;