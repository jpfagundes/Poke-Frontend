import React from "react";
import PokedexLoading from "../../assets/pokedex_loading.gif";
import "../../pages/Home/Home.css";

const Loading = () => (
  <div
    style={{
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <img src={PokedexLoading} style={{ width: "100%", height: 400 }} alt="Carregando..." />
  </div>
);

export default Loading;