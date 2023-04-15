import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import data from "./data";

function App() {
  const cardsInfo = data.map((data) => {
    return <Main itens={data} />;
  });
  return (
    <div>
      <Header />
      {cardsInfo}
    </div>
  );
}

export default App;
