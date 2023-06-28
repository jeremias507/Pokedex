import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { BottomBar } from "./components/BottomBar";
import { PokeList } from "./components/PokeList";

import "./App.css";

function App() {
  return (
    <div>
      <TopBar />
      <PokeList />
      <BottomBar />
    </div>
  );
}

export default App;
