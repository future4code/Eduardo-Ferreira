import styled from "styled-components";

const DivContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid #333;
  width: 400px;
  height: 400px;
  padding: 0 40px;
  & h1 {
    margin-bottom: 80px;
  }
  & button {
    margin-top: 60px;
    padding: 14px;
  }
  & input {
    padding: 10px;
  }
  & label {
    margin-bottom: 10px;
  }
`;

export const Home = () => {
  return (
    <DivContainer>
      <h1>Criar PlayList</h1>
      <label>NOVA PLAYLIST</label>
      <input />
      <button>Salvar</button>
    </DivContainer>
  );
};
