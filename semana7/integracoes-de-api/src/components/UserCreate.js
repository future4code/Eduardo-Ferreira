import { useState } from "react";

const UserList = (props) => {
  const [inputs, setInputs] = useState({
    inputName: "",
    inputEmail: ""
  });

  const handleName = (event) => {
    setInputs({
      inputName: event.target.value,
      inputEmail: inputs.inputEmail
    });
  };

  const handleEmail = (event) => {
    setInputs({
      inputEmail: event.target.value,
      inputName: inputs.inputName
    });
  };

  const createUser = () => {
    const body = {
      name: inputs.inputName,
      email: inputs.inputEmail
    };
    props.add(body);
  };

  return (
    <div>
      <input onChange={handleName} placeholder="Nome" />
      <input onChange={handleEmail} placeholder="E-mail" />
      <button onClick={createUser}>Salvar</button>
    </div>
  );
};

export default UserList;
