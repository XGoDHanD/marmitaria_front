const url = "http://localhost:3000/vendas"
const dadosPost = 
        {
        cliente: 'cliente via post front',
        prato: 'prato via post front', 
        valor: 999,
        data_venda: '27/01/2023', 
        data_pago: '27/01/2023',
        status_venda: 'pago'
        }

const updateDatavenda = {
    id: 1,
    cliente: 'cliente updateaaaaaaaaaaaaa',
    prato: "PRATO UPDATE",
    valor: 555,
    data_venda: '30/01/2023',
    data_pago: '30/01/2023',
    status_venda: 'pago'
}

const id = { id: 3 };


function getVendas(){
    axios.get(url)
        .then(response =>{
            console.log(response)
        })
        .catch(error => console.log(error))
}

function postVendas(){
    axios.post(url,dadosPost)
        .then(response =>{
            console.log(response)
        })
        .catch(error => console.log(error))
}


function putVenda(){
    axios.put(url,updateDatavenda)
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.log(error))
}

function deleteVenda(){
    axios.delete(url,{data: id})
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(error))    
}

deleteVenda();


