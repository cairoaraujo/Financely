
import { useState, useEffect } from "react";
import styles from './Cards.module.css'
import {GrAddCircle} from 'react-icons/gr'

const Cards = () => {


    const [users, setUsers] = useState([]);
    const [loggedUser, setLoggedUser] = useState ([])
    const [cards, setCards] = useState([])
    const [bills, setBills] = useState([])
    
    useEffect(() =>{
    
        async function getData(){
            const response = await fetch('https://localhost:7287/users')
            const data = await response.json()
            setUsers(data)
            setLoggedUser(data[0])
            setCards(data[0].cards)
        }
    
        getData()
    
        
    
    
    }, [])
    
    function getBillsFromCard (card) {
        var value = [];
        card.bills.map(bill =>{
            value.push(bill.billValue)
    
        })
        return value
    }
    
    console.log(cards)
    
    return <div className={styles.cards}>   
        {cards.map(card =>{
            return(
                <>  
                    <span className={styles.cardIdentity}>
                        <img className={styles.cardImg} src={card.cardLogo}></img>
                        <h4>{card.name}, de final {card.cardNumber}</h4>
                        <p className={styles.bill}>R$ {getBillsFromCard(card)}</p>
                        <GrAddCircle></GrAddCircle>
                    </span>
                </>
    
            )
        })}
    </div> 





}
export default Cards;