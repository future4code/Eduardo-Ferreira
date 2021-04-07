import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer
} from "./styles";

import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

const Post = (props) => {
  const [config, setConfig] = useState({
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    comentarios: []
  });

  const onClickCurtida = () => {
    if (config.curtido) {
      setConfig({
        ...config,
        curtido: !config.curtido,
        numeroCurtidas: config.numeroCurtidas - 1
      });
    } else {
      setConfig({
        ...config,
        curtido: !config.curtido,
        numeroCurtidas: config.numeroCurtidas + 1
      });
    }
  };

  const onClickComentario = () => {
    setConfig({
      ...config,
      comentando: !config.comentando
    });
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...config.comentarios, comentario];

    setConfig({
      ...config,
      comentarios: listaDeComentarios,
      comentando: false,
      numeroComentarios: config.numeroComentarios + 1
    });
  };

  console.log(config);
  const iconeCurtida = config.curtido ? iconeCoracaoPreto : iconeCoracaoBranco;

  const caixaDeComentario = config.comentando ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    config.comentarios.map((comentario) => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      );
    })
  );

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={config.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={config.numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  );
};

export default Post;
