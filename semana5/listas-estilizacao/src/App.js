import React from "react";
import "./styles.css";
import { CadastrarPost } from "./components/CadastrarPost/CadastrarPost";

class App extends React.Component {
  render() {
    return (
      <div>
        <CadastrarPost />
      </div>
    );
  }
}

export default App;
