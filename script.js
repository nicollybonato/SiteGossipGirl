const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com qual personagem você mais se identifica e admira?",
        alternativas: [
            {
                texto: "Blair Waldorf",
                afirmacao: "Você é ambiciosa e estratégica, gosta de ter total controle e de ser a melhor em tudo o que faz, "
            },
            {
                texto: "Serena",
                afirmacao: "Você é ousada e espontânea, gosta de estar por dentro de todas as tendências e tem um carisma que conquista todos a sua volta,"
            }
        ]
    },
    {
        enunciado: "Em relação aos personagens masculinos, qual é seu favorito? ",
        alternativas: [
            {
                texto: "Nate Arthibald",
                afirmacao: "se encanta com charme e com caráter"
            },
            {
                texto: "Chuck Bass",
                afirmacao: "se encanta com mistério e ousadia"
            }
            
        ]
    },
    {
        enunciado: "Qual dos personagens te trouxe maior revolta e inconformidade?",
        alternativas: [
            {
                texto: "Vanessa e Jenny",
                afirmacao: "e odeia que intrusos comecem a viver sua realidade e rotina."
            },
            {
                texto: "As malvadinhas",
                afirmacao: "e odeia ver maldade ou controle social indevido."
            }
        ]
    },
    {
        enunciado: "Qual dos casais da série você mais gosta?",
        alternativas: [
            {
                texto: "Blair e Chuck",
                afirmacao: "Você se interessa por amor complexo e profundo, mas não perde a tendência a joguinhos."
            },
            {
                texto: "Serena e Dan",
                afirmacao: "Você se interessa por romances de fime, com casais inceparáveis e amor transparente."
            }
        ]
    },
    {
        enunciado: "Para confirmarmos se você é um verdadeiro fã, selecione a alternativa que diz quem é a Garota do Blog. ",
        alternativas: [
            {
                texto: "Dorota",
                afirmacao: "Apesar de seus esforços, você não é um verdadeiro fã da série e não a assistiu por completo! XOXO!"
            },
            {
                texto: "Dan",
                afirmacao: "É um verdadeiro fã e acompanhou a série até o fim, descobrindo quem estava por trás das fofoca de Manhattan! XOXO!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
