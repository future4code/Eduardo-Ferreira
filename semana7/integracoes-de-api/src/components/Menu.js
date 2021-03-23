const Menu = (props) => {
  return (
    <div>
      <button onClick={() => props.change("cadastrar")}>
        Cadastrar Usuário
      </button>
      <button onClick={() => props.change("listar")}>Listar Usuários</button>
    </div>
  );
};

export default Menu;
