/**  */


const arrPosts = [];

function pegarDados() {
    const form = document.forms[0];
    let titulo = form.titulo.value;
    let img = form.imagem.value;
    let autor = form.autor.value;
    let conteudo = form.conteudo.value;

    if((titulo == "") || (autor == "") || (conteudo == "") || (img == "")){
        alert("Preencha todos os campos!");
        return false;
    }

    arrPosts.push({
        id: arrPosts.length + 1,
        titulo: titulo.value,
        autor: autor.value,
        img: img.value,
        conteudo: conteudo.value
    });

    const post = document.createElement("div");
    const posts = document.querySelector(".posts");

    post.innerHTML = "<h1>" + titulo + "</h1><span>"+"<img src="+ img +">" + "<i>" + autor + "</i>" + "</span><p>" + conteudo + "</p>";
    posts.appendChild(post);

    titulo.value = "";
    autor.value = "";
    conteudo.value = "";
    //passaValor(titulo, img, autor, conteudo);
}

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