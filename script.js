const form = document.getElementById("form-atividade") //document.getElementById("form=atividade") ele pega o id da form 
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />' // linka a imagem de aprovado
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />' // linka a imagem de reprovado

//uma costante que indica qual imagem aparecerá dependendo se o aluno foi aprovado ou não


const atividades = []  // insere a matéria que o usuario digitou no fórmulario
const notas = [] // insere a nota que o usuario digitou no fórmulario

const spanAprovado = '<span class="aprovado">Aprovado</span>' // indica na tela se você foi aprovado
const spanReprovado = '<span class="reprovado">Reprovado</span>' // indica na tela se você foi reprovado

const notaMinima = parseFloat(prompt("Digite a Nota Mínima: ")) // É o prompt que te pergunta a nota minima no alerta do site

let linhas = ' ' // espaço em branco entre linhas

form.addEventListener('submit', function(e){ // adciona ouvidor
   e.preventDefault();

    adicionaLinha(); //funciona como variavel de adicionar a linha
    
    atualizaTabela(); //funciona como variavel de atualizar tabela

    atualizaMeidaFinal(); //funciona como variavel para atualiza média final 

})

function adicionaLinha() {  // pega a variavel e adiciona a função

    const inputNomeAtividade = document.getElementById("nome-atividade") // lugar para registrar o nome da atividade
    const inputNotaAtividade = document.getElementById("nota-atividade") // lugar para registrar a nota da atividade

    if (atividades.includes(inputNomeAtividade.value)) { //indica que o nome da atividade foi inserido 

        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`) // alerta que indica que a nota já foi inserida
        
    }
    
    else { //caso contrário

    atividades.push(inputNomeAtividade.value) // adiciona os valores na atividade
    notas.push(parseFloat(inputNotaAtividade.value)) // converter para numero inteiro

    let linha = '<tr>'// adiciona uma vaiável para a nota
    linha += `<td>${inputNomeAtividade.value}</td>`// nome da atividade 
    linha += `<td>${inputNotaAtividade.value}</td>`// nota da atividade
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>` // se a nota minima for atingida: aprovado, se nao reprovado
    linha += '</tr>'

    linhas += linhaS // transporta os dados das linhas para a coluna

    }

    inputNomeAtividade.value = ' ' // espaço vazio
    inputNotaAtividade.value = ' ' //espaço vazio
    
}

function atualizaTabela() { // adiciona a função a tabela

    const corpoTabela = document.querySelector('tbody') //selecionar o corpo da tabela do html
    corpoTabela.innerHTML = linhas // adiciona os resultados na tabela
    
}

function atualizaMeidaFinal() { // adiciona a função de atualizar a media final

    const mediaFinal = calculaMediaFinal() // funciona como uma variavel que calcula media final

    document.getElementById("media-final-valor").innerHTML = mediaFinal // indica sua nota final
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado // indica se sua nota final foi aprovada ou reprovada
    
}

function calculaMediaFinal() { // adiciona a função para a variavel das medias finais

    let somaDasNotas = 0 // variavel de somar as notas

    for (let i = 0; i < notas.length; i++) { // nota reprovada

        somaDasNotas += notas[i] // nota aprovada
        
    }

    return somaDasNotas / notas.length // calculador de notas
    
}