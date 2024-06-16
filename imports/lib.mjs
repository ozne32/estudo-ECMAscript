// o export é uma sintaxe qu permite exportar o único valor, objeto, função ou classe como o 
// valor padrão de um módulo
export const saudacao = ()=>{
    let data = new Date().toLocaleDateString()
    return console.log('oi, tudo certo ? meu querido:: ', data)
}
// aqui é só um exmeplo para colocar como coisas mudaram no ES13
// ao ínves de fazer
export async function aguardarPromessa(){
    function fetchDados(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve('acabou')
            }, 2000)
        })
    }
    const dados = await fetchDados()
}
// agr dá para fazer de uma mamenria bem mais enxuta, semprecisar colocando uma função assincrona 
// aí dps outra função para aí ter  a promisse, e então esperar ela para conseguir retornar os dados
export function novoJeito(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('foi')
        }, 3000)
    })
}
const dados = await novoJeito()
console.log(dados)

