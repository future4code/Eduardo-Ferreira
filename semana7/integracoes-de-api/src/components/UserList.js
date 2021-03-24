const UserCreate = (props) => {
  const users = props.getUsers;

  const renderUsers = users.map((item) => {
    return (
      <p>
        {item.name}{" "}
        <button onClick={() => props.deletUser(item.id)}> Deletar</button>
      </p>
    );
  });
  return <div>{renderUsers}</div>;
};

export default UserCreate;
