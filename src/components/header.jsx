import React from "react";
import { Imagem1 } from "./Imagem1";


export const Header = () => {
    return (
        <div 
            style={{
                backgroundColor: "#211d19",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: "100vh"
            }}>
            <h1 style={{ 
                textAlign: "center",
                color: "#99db49",
                fontSize: 55,
                marginTop: 10,
                marginBottom: -10,
                fontFamily: "'Roboto', sans-serif",
            }}>
                BEM VINDO INVOCADOR!
            </h1>
            <Imagem1 />

        </div>
    );
}
