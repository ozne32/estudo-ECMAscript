// o export é uma sintaxe qu permite exportar o único valor, objeto, função ou classe como o 
// valor padrão de um módulo
export const saudacao = ()=>{
    let data = new Date().toLocaleDateString()
    return console.log('oi, tudo certo ? meu querido:: ', data)
}

