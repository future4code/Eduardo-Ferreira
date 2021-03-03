/* let passaValor = function(titulo, img, autor, conteudo)
{
    window.location = "posts.html?titulo="+titulo+"?img="+img+"?autor="+autor+"?conteudo="+conteudo;
}
 */

/* function variaveisUrl() {
    const url = location.search;
    let parametros = url.split("&");
    
    for (i=0; i<parametros.length;i++) { 

    }
}

variaveisUrl(); */

const arrPosts = [];
//criar objeto
//imprimir objeto
const form = document.forms[0];
let titulo = form.titulo;
let img = form.imagem;
let autor = form.autor;
let conteudo = form.conteudo;

function criarPost() {

    if ((titulo.value == "") || (autor.value == "") || (conteudo.value == "") || (img.value == "")) {
        alert("Preencha todos os campos!");
        return false;
    }

    const obj = {
        id: arrPosts.length + 1,
        titulo: titulo.value,
        autor: autor.value,
        img: img.value,
        conteudo: conteudo.value
    }
    
    arrPosts.push({obj});

    imprimirPost(obj.titulo, obj.autor, obj.img, obj.conteudo);
}

function imprimirPost(titulo, autor, img, conteudo) {

    const post = document.createElement("div");
    const posts = document.querySelector(".posts");

    post.innerHTML = "<h1>" + titulo + "</h1><span>" + "<img src=" + autor + ">" + "<i>" + img + "</i>" + "</span><p>" + conteudo + "</p>";
    posts.appendChild(post);
    console.log("Eduardo");

    console.log(arrPosts);
}

//adicionar ID ao HTML

//quando clicar no link executar uma função que vai pegar 

