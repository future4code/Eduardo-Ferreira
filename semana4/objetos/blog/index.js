/**  */


const arrPosts = [];

function pegarDados() {
    const form = document.forms[0];
    let titulo = form.titulo;
    let autor = form.autor;
    let conteudo = form.conteudo;

    arrPosts.push({
        id: arrPosts.length + 1,
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    });

    const post = document.createElement("div");
    const posts = document.querySelector(".posts");

    post.innerHTML = "<h1>" + titulo.value + "</h1><span>" + autor.value + "</span><p>" + conteudo.value + "</p>";
    posts.appendChild(post);

    titulo.value = "";
    autor.value = "";
    conteudo.value = "";

    console.log(arrPosts);
}