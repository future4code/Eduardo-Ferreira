//Ela é a responsável por guardar o array com as listas de despesas que serão renderizadas na div 
let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    console.log(despesas);

    despesas.forEach(elemento => {
        const p = document.createElement('p');
        p.textContent += "valor: " + elemento.valor + " | tipo: " + elemento.tipo + " | descrição: " + elemento.descricao;
        divDespesas.appendChild(p);
    });
}


// SEGUNDO 
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0

    arrDespesas.filter((elemento) => {
        switch (elemento.tipo) {
            case "alimentacao":
                gastoAlimentacao += elemento.valor;
                break;
            case "utilidades":
                gastoUtilidades += elemento.valor;

                break;
            default:
                gastoViagem += elemento.valor;
        }
        gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem;
    });

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)

        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""


        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}

// TERCEIRO
function filtrarDespesas() {
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    let despesasFiltradas = arrDespesas.filter((elemento) => {
        switch (tipoFiltro) {
            case "alimentacao":
                return elemento.tipo == "alimentacao";
            case "utilidades":
                return elemento.tipo == "utilidades";
            case "viagem":
                return elemento.tipo == "viagem";
            default:
                return elemento
        }
    }).filter(elemento => {
        if ((valorMin != "") && (valorMax != ""))
            return ((elemento.valor >= valorMin) && (elemento.valor <= valorMax))
        else if (valorMin != "")
            return (elemento.valor >= valorMin)
        else if (valorMax != "")
            return (elemento.valor <= valorMax)
        else
            return elemento.valor
    })

imprimirDespesas(despesasFiltradas)
}


/* 
 */



// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}

function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}

function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}