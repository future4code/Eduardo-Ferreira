import { useEffect, useState } from "react";
import UserCreate from "./components/UserCreate";
import UserList from "./components/UserList";
import Menu from "./components/Menu";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("cadastrar");
  const [users, setUsers] = useState([]);

  /* const body = {
    name: "eduardo",
    email: "ferreira@gmail.com"
  }; */

  const createUser = (body) => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "eduardo-ferreira"
          }
        }
      )
      .then((res) => {
        getUsers();
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "eduardo-ferreira"
          }
        }
      )
      .then((res) => {
        setUsers([...res.data]);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const deletUser = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "eduardo-ferreira"
          }
        }
      )
      .then((res) => {
        setUsers([...res.data]);
        getUsers();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const addUser = (user) => {
    createUser(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const changePage = (string) => {
    setPage(string);
  };

  const returnPage = () => {
    if (page === "cadastrar") {
      return <UserCreate add={addUser} />;
    } else {
      return <UserList deletUser={deletUser} getUsers={users} />;
    }
  };

  return (
    <div className="App">
      <Menu change={changePage} />
      {returnPage()}
    </div>
  );
}
