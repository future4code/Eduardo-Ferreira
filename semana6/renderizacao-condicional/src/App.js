import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import React, { useState, useEffect } from "react";

import "./styles.css";
import Acabou from "./Components/Acabou";

function App() {
  const [etapas, setEtapas] = useState(1);

  const mudarEtapa = () => {
    //setEtapas(etapa);
    switch (etapas) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Acabou />;
      default:
    }
  };

  return (
    <div className="App">
      {mudarEtapa()}
      {etapas != 4 ? (
        <button onClick={() => setEtapas(etapas + 1)}>Próxima Etapa</button>
      ) : (
        false
      )}
    </div>
  );
}

export default App;
