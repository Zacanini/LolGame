import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const ChampionContext = createContext();

// Provedor do contexto
export const ChampionProvider = ({ children }) => {
    const [currentChampion, setCurrentChampion] = useState(null);

    const updateChampion = (newChampion) => {
        setCurrentChampion(newChampion);
    };

    return (
        <ChampionContext.Provider value={{ currentChampion, updateChampion }}>
            {children}
        </ChampionContext.Provider>
    );
};

// Hook customizado para usar o contexto facilmente
export const useChampion = () => useContext(ChampionContext);
