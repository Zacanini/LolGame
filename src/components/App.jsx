import React, { useState, useEffect, createContext } from 'react';
import { getCampeao } from './SortCard';
import { Imagem1 } from './Images';
import Button from "@mui/material/Button";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #221d21;
  }
`;

export const AppContext = createContext([{}, () => { }]);

export const App = () => {
    const [champion, setChampion] = useState({});

    // Função para buscar e atualizar o campeão
    const updateChampion = async () => {
        const champ = await getCampeao();
        setChampion(champ);
    };

    useEffect(() => {
        updateChampion(); // Atualiza o campeão ao montar o componente
    }, []);

    return (
        <>
            <AppContext.Provider value={[champion, setChampion]}>
                <GlobalStyle />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ fontFamily: "Roboto, sans-serif", color: "#e33c08" }}>SORTEIE SUA CARTA</h1>
                    <Imagem1 />
                    <Button
                        onClick={updateChampion}
                        variant="contained"
                        sx={{ backgroundColor: '#f77014', color: '#fff' }}  // Cor personalizada
                    >
                        CLICK ME
                    </Button>
                    {console.log(champion)}
                </div>
            </AppContext.Provider>
        </>
    );


};
