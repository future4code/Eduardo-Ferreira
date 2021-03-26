import "./styles.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { PlayList } from "./components/PlayList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PlayList />
      <Footer />
    </div>
  );
}
