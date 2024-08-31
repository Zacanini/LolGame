import React, { useContext } from "react";
import { AppContext } from "./App";

export const Status = () => {
    // Consome o contexto
    const [champion] = useContext(AppContext); // Desestruturação para obter o objeto champion

    const hp = champion?.stats?.hp; // Verificação segura para evitar erros caso champion ou stats sejam undefined
    const armor = champion?.stats?.armor;
    const attackdamage = champion?.stats?.attackdamage;
    const attackrange = champion?.stats?.attackrange;
    const movespeed = champion?.stats?.movespeed;
    const power = champion?.stats?.mp;
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '50px' }}>
            <div>
                <h1 style={{fontFamily: "Roboto, sans-serif", color: "#e33c08", textAlign:"center", fontSize: 18 }}>HP: {hp}</h1>
                <h1 style={{fontFamily: "Roboto, sans-serif", color: "#e33c08", textAlign:"center", fontSize: 18 }}>ARMADURA: {armor}</h1>
            </div>
            <div>
                <h1 style={{fontFamily: "Roboto, sans-serif", color: "#e33c08", textAlign:"center", fontSize: 18 }}>DANO: {attackdamage}</h1>
                <h1 style={{fontFamily: "Roboto, sans-serif", color: "#e33c08" ,textAlign:"center", fontSize: 18 }}>POWER: {power}</h1>
            </div>
            <div>
                <h1 style={{fontFamily: "Roboto, sans-serif", color: "#e33c08", textAlign:"center", fontSize: 18 }}>RANGE: {attackrange}</h1>
                <h1 style={{fontFamily: "Roboto, sans-serif", color: "#e33c08", textAlign:"center", fontSize: 18 }}>MOVESPEED: {movespeed}</h1>
            </div>
        </div>
    );
};
