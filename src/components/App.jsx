import React, { useState, createContext } from 'react';
import { getCampeao } from './SortCard';

export const AppContext = createContext([0, () => { }]);


export const App = () => {

    const [champion, setChampion] = useState(getCampeao());
    return (
        <>
            <AppContext.Provider value={[champion, setChampion]}>
                <h1>Teste de useContext</h1>
                {console.log(`1-`,champion)}
            </AppContext.Provider>
        </>
    );
};