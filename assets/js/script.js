// 1º passo - pegar as imagens
// a. utilizando a plataforma unsplash para pegar as imagens

// 2º passo - armezenar as imagens

// 3º passo - mostrar as imagens/montar o layout


const urlBase = "https://source.unsplash.com/random/";
const container = document.getElementById('container');

function pegarImagens(){
    const imagens = [];

    for(let i = 0; i < 30; i++){
        const urlImagem = `${urlBase}${gerarNumeroAleatorio()}x${gerarNumeroAleatorio()}`;

        imagens.push(urlImagem);
    }
    
    return imagens;
}

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 10) + 300;
}

function montarLayout(){
    const listaImagens = pegarImagens();

    listaImagens.forEach(function(imagem){
        const img = document.createElement('img');
        img.src = imagem;
        container.appendChild(img);
    });
}
montarLayout();
