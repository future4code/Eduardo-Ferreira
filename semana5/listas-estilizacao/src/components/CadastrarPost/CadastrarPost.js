import { Component } from "react";
import styled from "styled-components";
import Post from "../Post/Post";

const Input = styled.input`
  padding: 10px;
  margin: 4px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 14px;
  background-color: blue;
  color: #fff;
  border: 0;
`;

export class CadastrarPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: ""
    };
  }

  handleNome = (event) => {
    this.setState({
      nomeUsuario: event.target.value
    });
  };

  handleFoto = (event) => {
    this.setState({
      fotoUsuario: event.target.value
    });
  };

  handlePost = (event) => {
    this.setState({
      fotoPost: event.target.value
    });
  };

  adicionarPost = () => {
    if (
      this.state.nomeUsuario === "" ||
      this.state.fotoUsuario === "" ||
      this.state.fotoPost === ""
    ) {
      alert("Preencha todos os campos!");
      return false;
    }

    if (
      this.state.fotoUsuario.indexOf("http") === -1 ||
      this.state.fotoPost.indexOf("http") === -1
    ) {
      alert("Imagem inválida!");
      return false;
    }

    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    };

    this.setState({
      posts: [...this.state.posts, novoPost]
    });
  };

  render() {
    const listaComponentes = this.state.posts.map((post, index) => {
      return (
        <Post
          key={index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <div>
        <FormContainer>
          <H1>Cadastrar Post</H1>
          <Input
            onChange={this.handleNome}
            value={this.state.nomeUsuario}
            type="text"
          />
          <Input
            onChange={this.handleFoto}
            value={this.state.fotoUsuario}
            type="text"
          />
          <Input
            onChange={this.handlePost}
            value={this.state.fotoPost}
            type="text"
          />
          <Button onClick={this.adicionarPost}>CADASTRAR</Button>
        </FormContainer>
        {listaComponentes}
      </div>
    );
  }
}
