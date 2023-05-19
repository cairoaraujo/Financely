const events = () =>{
    const handleClicou = (e) =>{
        fetch('https://localhost:7287/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    }
    return <div>
            <button onClick={handleClicou}>
            Oi joao
            </button>
            <img src="./assets/logo.png" alt="logo"></img>
        </div>
}

export default events;