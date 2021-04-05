import styled from "styled-components";

const DivContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  border: 1px solid #333;
  min-width: 400px;
  padding: 0 40px;
`;

const DivPlayList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  align-items: center;
  margin-top: 10px;
  :last-child {
    margin-bottom: 10px;
  }
  & button {
    border: 1px solid orangered;
    background-color: #fff;
    margin-left: 4px;
    padding: 6px;
  }
  & p {
    margin-right: 8px;
    padding: 4px 0 4px 0;
    width: 100%;
    border-bottom: 1px solid #333;
  }
`;

export const PlayList = () => {
  return (
    <DivContainer>
      <DivPlayList>
        <p>Play 1</p>
        <button>Entrar</button>
        <button>Editar</button>
        <button>Deletar</button>
      </DivPlayList>
      <DivPlayList>
        <p>Play 1</p>
        <button>Entrar</button>
        <button>Editar</button>
        <button>Deletar</button>
      </DivPlayList>
      <DivPlayList>
        <p>Play 1 </p>
        <button>Entrar</button>
        <button>Editar</button>
        <button>Deletar</button>
      </DivPlayList>
    </DivContainer>
  );
};
