import clientes from "./listaClientesTest"

const getClients=async ()=>{
    return clientes
}
const deleteClient=async()=>{

}
const registerClient=async(client)=>{
    clientes.push(client)
    return clientes
}
const searchClients=async(criteria)=>{
    if(!criteria || criteria===''){
        return clientes
    }
    let results=[]
    criteria=criteria.toLowerCase()
    clientes.forEach(element => {
        if(element.nombre.toLowerCase().includes(criteria) || element.apellido.includes(criteria) ||element.dni.includes(criteria)){
            results.push(element)
        }
    });
    return results
}

export {getClients,searchClients,deleteClient,registerClient}
