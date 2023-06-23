import "./styles.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import allBreeds from "./data/breeds";

export default function App() {
  const [selectedBreed, setSelectedBreed] = useState("basenji");

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Sidebar
          allBreeds={Object.keys(allBreeds.message).slice(0, 10)}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
        <Main selectedBreed={selectedBreed} />
      </div>
      <Footer />
    </div>
  );
}
