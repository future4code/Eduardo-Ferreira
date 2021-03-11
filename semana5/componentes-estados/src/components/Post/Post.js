import React from "react";
import "./Post.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeShare from "../../img/share-24px.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import { SecaoCompartilhar } from "../SecaoCompartilhar/SecaoCompartilhar";

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    sharing: false,
    numeroComentarios: 0
  };

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
        curtido: true
      });
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
        curtido: false
      });
    }
    //console.log("Curtiu!");
  };

  onClickComentario = () => {
    if (this.state.sharing) {
      this.setState({
        sharing: false
      });
    }
    this.setState({
      comentando: !this.state.comentando
    });
  };

  onClickShare = () => {
    if (this.state.comentando) {
      this.setState({
        comentando: false
      });
    }
    this.setState({
      sharing: !this.state.sharing
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    });
  };

  aoEnviarShare = (event) => {
    this.setState({
      sharing: false
    });
    console.log("Post compartilhado no " + event.target.value);
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;
    let componenteCompartilhar;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    if (this.state.sharing) {
      componenteCompartilhar = (
        <SecaoCompartilhar aoEnviar={this.aoEnviarShare} />
      );
    }

    return (
      <div className={"post-container"}>
        <div className={"post-header"}>
          <img
            className={"user-photo"}
            src={this.props.fotoUsuario}
            alt={"Imagem do usuario"}
          />
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img
          className={"post-photo"}
          src={this.props.fotoPost}
          alt={"Imagem do post"}
        />

        <div className={"post-footer"}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
          <IconeComContador
            icone={iconeShare}
            onClickIcone={this.onClickShare}
          />
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </div>
        {componenteComentario}
        {componenteCompartilhar}
      </div>
    );
  }
}

export default Post;
