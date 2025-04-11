// let titulo = "aprender javascript"
// let descricao = "estudar manipulaçao de strings"

// console.log(titulo, typeof(titulo))
// console.log(descricao, typeof(descricao))

// console.log('tamanho da variavel', titulo.length)
// console.log('tamannho da variavel descricao', descricao.length)
// console.log('primeiro caractere', titulo[0])
// console.log('primeiro caractere', [descricao.length -1])

// const palavra = 'palavra'
// console.log('caractere na posiçao 3', palavra.charAt(3))

// let titulo = 'aprender javascript'
// let categoria = 'estudo'
// let infoCompleta = 'categoria: '+ categoria + '-' + titulo

// console.log(infoCompleta)

// let infoCompleta2 = `categoria: ${categoria} - ${titulo}`

// console.log(infoCompleta2)

// let texto = 'posição de javascript'

// console.log(texto.indexOf('javascript'))
// console.log(texto.includes('javascript'))
// console.log(texto.startsWith('p'))
// console.log(texto.endsWith('t'))

// let texto = 'javascript,programaçao,web,frontend'

// console.log('texto original: ', texto)

// console.log('texto slice:', texto.slice(0, 10))

// console.log('texto slice:', texto.substring(0, 10))

// let arrayTags = texto.split(',')
// console.table(arrayTags)
// console.log(arrayTags.join('--------------------'))

// const destacarTermo = (texto, termo) => {
//     if(!termo) return texto
//     const regex = new RegExp(termo, 'gi')
//     return texto.replace(regex, `**$&**`)
// }

// let busca = destacarTermo('javascript é uma linguagem incrivel. amo javascript!', 'javascript')

// console.log('resultado com destaque:', busca)

// console.log('math.PI', Math.PI)
// console.log('math.E', Math.E)

// const raio = 5

// const areaCirculo = Math.PI * Math.pow(raio, 2)

// console.log(`area de um circulo com raio ${raio} : ${areaCirculo}`)

// const numero = 9.7

// console.log(Math.round(numero))
// console.log(Math.floor(numero))
// console.log(Math.ceil(numero))
// console.log(Math.trunc(numero))

// const numeroAleatorioEntre = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min
// }

// console.log(numeroAleatorioEntre(1,100))

// const hoje = new Date()
// console.log(hoje)
// console.log(new Date('2025-06-15T10:30:00'))
// console.log(new Date('2025-06-15'))

// const dataComponentes = new Date(2025, 4, 15, 10, 30, 0)

// console.log(dataComponentes)

// const hoje = new Date()

// const formatarData = (data) => {
//     const dia = data.getDate().toString().padStart(2, '0')
//     const mes = (data.getMonth() + 1).toString().padStart(2, '0')
//     const ano = data.getFullYear()

//     return `${dia}/${mes}/${ano}`
// }

// console.log(hoje.getDate().toString())
// console.log(hoje.getMonth().toString())
// console.log(hoje.getFullYear())

// console.log(hoje)

// console.log(formatarData(hoje))

// const adicionarDias = (data, dias) => {
//     const novaData = new Date(data)

//     novaData.setDate(data.getDate() + dias)

//     return novaData
// }

// console.log(adicionarDias(hoje, 3))
// console.log(adicionarDias(hoje, 10))
// console.log(adicionarDias(hoje, 30))
// console.log(adicionarDias(hoje, 300))


// const dataFinal = new Date(2025, 4, 11)

// const diferencaMs = dataFinal - hoje

// console.log(diferencaMs)

// const diferencaDias = math.ceil(diferencaMs / (1000 * 60 * 60 * 24))

// console.log('diferença em dias : ', diferencaDias)