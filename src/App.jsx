import React from 'react';
import { Header } from './components/header';
import { ChampionProvider } from './components/ChampionContext';
import {useChampionCard} from './components/useChampionCard';

export const App = () => {


    return (
        <ChampionProvider>
            <Header />
            
        </ChampionProvider>
    );
};