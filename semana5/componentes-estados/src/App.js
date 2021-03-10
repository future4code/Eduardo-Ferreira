import React from "react";
import "./styles.css";
import Post from "./components/Post/Post";

class App extends React.Component {
  render() {
    return (
      <div>
      <div className={"app-container"}>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
      </div>
      <div className={"app-container"}>
        <Post
          nomeUsuario={"luluzinha"}
          fotoUsuario={"https://picsum.photos/200/150?random=51"}
          fotoPost={"https://picsum.photos/200/150?random=2"}
        />
      </div>
      <div className={"app-container"}>
        <Post
          nomeUsuario={"lolazinha"}
          fotoUsuario={"https://picsum.photos/200/150?random=55"}
          fotoPost={"https://picsum.photos/200/150?random=57"}
        />
      </div>
      </div>
    );
  }
}

export default App;
