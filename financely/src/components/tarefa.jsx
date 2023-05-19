const Tarefa = ({nome,idade,profissao}) => {
    return <>
        {idade >= 18 ?  (<li>{nome}</li>) : (<p>{nome} - Menor</p>)}
       
    </>
}

export default Tarefa;