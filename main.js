const url = "http://127.0.0.1:3000/vendas"

function getVendas(){
    axios.get(url)
        .then(response =>{
            console.log(response)
        })
        .catch(error => console.log(error))
}


getVendas()