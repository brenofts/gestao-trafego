const calendario = document.getElementById('calendario')

const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
var a = [	"a"	,	""	,	""	,	"a"	,	"a"	,	"a"	,	""	,	"a"	,	"a"	,	"a"	,	""	,	"a"	,	"a"	,	"a"	,	"a"	,	""	,	""	,	"a"	,	"a"	,	""	,	"a"	,	"a"	,	"a"	,	""	,	"a"	,	"a"	,	"a"	,	"a"	,	""	,	"a"	,	"a"	,	"a"	,	""	,	"a"	,	"a"	]	
var b = [	"b"	,	"b"	,	""	,	"b"	,	"b"	,	"b"	,	"b"	,	""	,	"b"	,	"b"	,	"b"	,	""	,	"b"	,	"b"	,	"b"	,	""	,	""	,	"b"	,	"b"	,	"b"	,	""	,	"b"	,	"b"	,	"b"	,	""	,	"b"	,	"b"	,	"b"	,	"b"	,	""	,	""	,	"b"	,	"b"	,	""	,	"b"	]	
var c = [	"c"	,	"c"	,	"c"	,	""	,	"c"	,	"c"	,	"c"	,	"c"	,	""	,	""	,	"c"	,	"c"	,	""	,	"c"	,	"c"	,	"c"	,	""	,	"c"	,	"c"	,	"c"	,	"c"	,	""	,	"c"	,	"c"	,	"c"	,	""	,	"c"	,	"c"	,	"c"	,	""	,	""	,	"c"	,	"c"	,	"c"	,	""	]	
var d = [	""	,	"d"	,	"d"	,	"d"	,	""	,	"d"	,	"d"	,	"d"	,	""	,	""	,	"d"	,	"d"	,	"d"	,	""	,	"d"	,	"d"	,	"d"	,	""	,	"d"	,	"d"	,	"d"	,	"d"	,	""	,	""	,	"d"	,	"d"	,	""	,	"d"	,	"d"	,	"d"	,	""	,	"d"	,	"d"	,	"d"	,	"d"	]	
var e = [	"e"	,	""	,	""	,	"e"	,	"e"	,	""	,	"e"	,	"e"	,	"e"	,	""	,	"e"	,	"e"	,	"e"	,	"e"	,	""	,	"e"	,	"e"	,	"e"	,	""	,	"e"	,	"e"	,	"e"	,	""	,	""	,	"e"	,	"e"	,	"e"	,	""	,	"e"	,	"e"	,	"e"	,	""	,	"e"	,	"e"	,	"e"	]	

async function carregarCalendario(data) {
    
    const ano = data.getFullYear()
    const mes = data.getMonth()
    const dia = data.getDate()

    const primeiroDiaDoMes = new Date(ano, mes, 1)
    
    document.getElementById('mes').innerText = meses[mes]
    document.getElementById('ano').innerText = ano

    //mes atual + 1, dia "0" retorna o número do último dia do mês anterior
    const diasNoMes = new Date(ano, mes + 1, 0).getDate()

    const textoData = primeiroDiaDoMes.toLocaleString('pt-BR', {
        month : 'long',
        day : "numeric",
        year : 'numeric',
        weekday : "long"
    })


    let diaDaSemana
    async function editarDiaDaSemana() {
        if (textoData.includes('-')) {
            diaDaSemana = textoData.split('-')[0]
        } else {
            diaDaSemana = textoData.split(', ')[0]
        }
    }
    
    await editarDiaDaSemana()
    const diasVazios = diasDaSemana.indexOf(diaDaSemana)


// escrevendo a escala
    const referencia = new Date(2010, 0, 1).getTime()
    var diferenca = primeiroDiaDoMes.getTime() - referencia
    var index = parseInt(diferenca % 35) - 1
    console.log(index)
    const umDia = 1000 * 60 * 60 * 24

    calendario.innerHTML = ''

    for (let i = 1; i <= diasVazios + diasNoMes; i++) {
        
        const quadradoDia = document.createElement('div')
        const numeroDia = document.createElement('span')
        numeroDia.classList.add('numero-dia')
        const conteudoDia = document.createElement('div')
        conteudoDia.classList.add('conteudo-dia')

        if (i > diasVazios) {
            quadradoDia.classList.add('dia')
            numeroDia.innerText = i - diasVazios
            quadradoDia.appendChild(numeroDia)
            let mesAtual = mes + 1
            conteudoDia.id = i - diasVazios + '/' + mesAtual + '/' + ano
            quadradoDia.appendChild(conteudoDia)
            quadradoDia.onclick = () => alert(conteudoDia.id)
        } else {
            quadradoDia.classList.add('vazio')
        }
        
        calendario.appendChild(quadradoDia)
    }
    console.log(diaDaSemana, diasVazios, diasNoMes, textoData)
}

carregarCalendario(new Date())