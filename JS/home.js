
//Variáveis globais

let card_atual = 0;



// descobri que posso colocar os cards dentro de uma array, então vou usar essa lógica 
// para fazer um carrossel, e dentro de uma array e uma única posição pode armazenar mais de um tipo de dado.
// nesse caso cards é uma array que contém em cada indice uma série de informações sobre um card
// fazendo um paralelo é como se fosse uma tabela de banco de dados.    

const cards = [
    // Os artesãos eram reconhecidos pela nobreza e clero
    // link com página traduzida
    {
        periodo: "Séc. XVIII",
        titulo: "O Artista da Corte",
        texto: "O modista era visto como um arquiteto da imagem. A roupa era a principal forma de comunicar poder, política e posição social.",
        exemplo: "<a href ='https://en-wikipedia-org.translate.goog/wiki/Rose_Bertin?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc' target= '_blank'>Rose Bertin</a>, modista de Maria Antonieta, tinha tanto poder de influência que era chamada informalmente de 'Ministra da Moda'.",
        status: "valorizado"
    },
    // Surgem as marcas e o nome do estilista ganha força
    {
        periodo: "Séc. XIX",
        titulo: "O Início da Etiqueta",
        texto: "O foco começa a mudar da pessoa que costura a roupa para o nome da 'Casa de Moda'. Nasce o conceito de Alta Costura.",
        exemplo: "<a href = 'https://en.wikipedia.org/wiki/Charles_Frederick_Worth' target ='_blank'>Charles Frederick Worth </a> foi o primeiro a colocar etiquetas com seu nome nas roupas, tornando o estilista mais importante que os artesãos.",
        status: "transicao"
    },
    // Revolução industrial
    {
        periodo: "Revolução Industrial",
        titulo: "O Ritmo das Fábricas",
        texto: "O tempo de pensar a roupa morre. A indústria exige coleções a cada estação, priorizando o volume sobre a invenção.",
        exemplo: "O conhecimento técnico virou um trabalho braçal, mal pago e escondido nas sombras da cadeia produtiva.",
        status: "anonimato"
    },
    // Fast Fashion aumenta de forma mundial
    {
        periodo: "Anos 2000",
        titulo: "A Era do Fast Fashion",
        texto: "A velocidade e o preço baixo se tornam a regra. O tempo de criação é reduzido a zero, focando apenas em copiar tendências globais.",
        exemplo: "Roupas são descartadas em semanas. O valor intelectual do criador é substituído pelo algoritmo de vendas e lucro rápido.",
        status: "invisivel"
    },
    // Contra-tendencia atual
    {
        periodo: "Hoje",
        titulo: "Retomando o Ritmo",
        texto: "Como resposta à produção acelerada, um novo movimento ganha força. Criadores independentes resgatam o valor intelectual da moda, focando no tempo e no propósito de cada peça.",
        exemplo: "Marcas focadas em slow fashion, como a <a href ='https://vitonez.com.br/' target ='_blank'>Vitonez</a>, demonstram que ir na contramão da indústria de massa não é apenas possível, mas essencial para devolver o protagonismo a quem cria.",
        status: "batalhando pela valorização"
    }

];





// vou criar um container base e alterar ele por meio de funções
function mostrarCard() {

    // puxo o id da div onde os cards serão inseridos


    const card = document.getElementById("cardsModa");

    card.innerHTML = `
        <p class="periodo_card">${cards[card_atual].periodo}</p>
        <h4 class="titulo_card">${cards[card_atual].titulo}</h4>
        <p class="texto_card">${cards[card_atual].texto}</p>
        <p class="exemplo_card">${cards[card_atual].exemplo}</p>
        <p class="status_card">${cards[card_atual].status}</p>
        <div class="paginacao">${card_atual + 1} / ${cards.length}</div>
    `;
}

//executo a função logo no ínicio
mostrarCard()

function proximo_card() {
    card_atual++;
    if (card_atual >= cards.length) {
        card_atual = 0;
    }
    mostrarCard();
}

function card_anterior() {
    card_atual--;
    if (card_atual < 0) {
        card_atual = cards.length - 1;
    }
    mostrarCard();
}