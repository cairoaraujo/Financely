
import { useState, useEffect } from "react";
import styles from 'react'

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
    
    return <div className={styles.infobox}>   
        {cards.map(card =>{
            return(
                <>
                    <h3> Cartão {card.name}</h3>
                    <p>Finalizado em {card.number}</p>
                    <img className={styles.cardImg} src={card.cardLogo}></img>
                    <p>fatura mensal: R$ {getBillsFromCard(card)}</p>
                </>
    
            )
        })}
    </div> 





}
export default Cards;