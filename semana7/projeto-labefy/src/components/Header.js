import styled from "styled-components";

const DivContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: black;
  width: 100%;
  padding: 14px 40px;
  & h1 {
    color: #fff;
  }
  & button {
    background-color: orangered;
    border: 0;
    padding: 14px;
  }
`;

export const Header = () => {
  return (
    <DivContainer>
      <h1>Header</h1>
      <button>Ver PlayLists</button>
    </DivContainer>
  );
};
