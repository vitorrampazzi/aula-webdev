// const tarefas = ['estudar js', 'criar projeto', 'criar algo', 'passar tarefas']
// // Array literal (forma mais comum)
// const tarefas = [
//     "Estudar JavaScript",
//     "Criar projeto TaskMaster",
//     "Preparar apresentação",
//     "Revisar código"
//   ];
//   console.log("Array de tarefas:", tarefas);
  
//   // Usando o construtor Array
//   const categorias = new Array("Trabalho", "Estudo", "Pessoal", "Projetos");
//   console.log("Array de categorias:", categorias);
  
//   // Array.of (ES6)
//   const prioridades = Array.of("Baixa", "Média", "Alta");
//   console.log("Array de prioridades:", prioridades);
  
//   // Array.from (ES6) - cria array a partir de uma string
//   const letras = Array.from("TaskMaster");
//   console.log("Array de letras:", letras);


// console.log(tarefas[0])

// tarefas[1] = 'passar a limpo'

// tarefas.push('realizar testes')

// console.table(tarefas)

// tarefas.unshift('realizar testes de analise de dados')

// console.table(tarefas)

// tarefas.shift()

// console.table(tarefas)

// tarefas.pop()

// console.table(tarefas)

// tarefas.splice(1,1)

// console.table(tarefas)



// const executarForeach = (elemento, indice, array) => {
//     console.log(`${indice + 1} .${elemento}`)
//     console.log(array)
// }

// tarefas.forEach(executarForeach)

// const arrayNovo = tarefas.map((elemento, indice) => {
//     return indice + elemento + ' - concluido'
// })

// console.log(arrayNovo)

// const tarefasComA = tarefas.filter(elemento => elemento.toLowerCase('a'))

// console.log(tarefasComA)

// const tarefaEncontrada = tarefas.find(elemento => elemento.includes('js'))

// console.log(tarefaEncontrada)

// const indiceTarefaEncontrada = tarefas.findIndex(elemento => elemento.includes('js'))

// console.log(indiceTarefaEncontrada)

// tarefas.splice(indiceTarefaEncontrada, 1)

// console.log(tarefas)

// const valorFinal = tarefas.reduce((total, t, indice) => 
//     total + indice, 0
// )

// console.log(valorFinal)

// const tarefa = {
//     id: 1,
//     titulo: 'aprender sobre objetos',
//     descricao: 'estudar js é dahora',
//     concluida: false,
//     prioridade: 'alta',
//     dataCriacao: new Date()
// }

// console.log(tarefa)
// console.log(tarefa?.titulo)
// console.log(tarefa['titulo'])

// const tarefasEspeciais = {
//     'data-criacao': new Date(),
//     'nome da tarefa': 'nome da tarefa separado'
// }

// console.log(tarefasEspeciais['data-criacao'])


// const projetoTaskMaster = {
//     nome: "TaskMaster",
//     version: "1.0",
//     autor: "Curso JavaScript",
//     tarefas: [],
//     adicionarTarefa(titulo, prioridade = "média") {
//       const novaTarefa = {
//         id: this.tarefas.length + 1,
//         titulo,
//         prioridade,
//         concluida: false,
//         criada: new Date()
//       };
//       this.tarefas.push(novaTarefa);
//       console.log(`Tarefa "${titulo}" adicionada.`);
//       return novaTarefa;
//     },
//     listarTarefas() {
//       console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
//       this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
//     }
//   };
  
//   projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
//   projetoTaskMaster.adicionarTarefa("Criar interface");
//   projetoTaskMaster.listarTarefas();


// console.log(Object.keys(projetoTaskMaster))

// const prioridades = 
// ['baixa', 'media', 'alta']

// const [baixa, media, alta] = prioridades

// console.log(baixa, media, alta)

// const categorias = ['trabalho', 'saude', 'trabalhavapaie', 'projetin']

// const [primeiraCategoria, ... outrasCategorias] = categorias

// console.log(primeiraCategoria, outrasCategorias)