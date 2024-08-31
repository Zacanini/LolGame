import React, { useContext } from "react"; // Adicione a importação de useContext
import { AppContext } from "./App";


export const Imagem1 = () => {
    // Consome o contexto
    const [champion] = useContext(AppContext);


    // Formata o URL da imagem
    const nome = champion.id;
    const nomeChampion = champion.name;
    const url = `./dragon_tail/img/champion/loading/${nome}_0.jpg`;

    return (
        <div >
            <img style={{ width: 180 }} src={url} alt={nome} />
            <h1 style={{textAlign:"center" , fontSize:30 , marginTop:-2 , fontFamily: "Roboto, sans-serif", color: "#b7aea5"}}>{nomeChampion}</h1>
        </div>
    );
};