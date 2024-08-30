import React from "react"; // Importa a biblioteca React para criar componentes
import RarityStars from "./RarityStars"; // Importa o componente RarityStars que provavelmente renderiza estrelas baseadas na raridade

// Componente ChampionCard que recebe as props 'carta', 'rarityStars', 'championName' e 'skinName'
export const ChampionCard = ({ carta, rarityStars, championName, skinName }) => (
    <div style={styles.imageWrapper}> {/* Cria um div para envolver a imagem e os textos */}
        {carta && <img style={styles.image(rarityStars)} src={carta} alt="Carta" />} 
        {/* Se a prop 'carta' existir, renderiza uma imagem com estilos dinâmicos baseados em 'rarityStars' */}
        
        <RarityStars stars={rarityStars} /> 
        {/* Renderiza o componente RarityStars passando a quantidade de estrelas como prop */}
        
        <h1 style={styles.text}>
            {skinName || championName} 
            {/* Renderiza o nome da skin se existir, caso contrário, renderiza o nome do campeão */}
        </h1>
    </div>
);

// Objeto styles que define os estilos usados no componente
const styles = {
    imageWrapper: {
        position: "relative" // Define a posição relativa para o wrapper da imagem, para que os elementos dentro possam ser posicionados relativamente a este div
    },
    image: (stars) => ({
        width: 250, // Largura da imagem
        marginTop: -100, // Margem superior negativa para ajustar o posicionamento vertical
        boxShadow: getBoxShadow(stars), // Sombra da imagem baseada no número de estrelas
        border: `solid ${getBackgroundColor(stars)} 3px`, // Borda da imagem, cor também baseada no número de estrelas
        borderRadius: 15 // Bordas arredondadas
    }),
    text: {
        position: "absolute", // Posiciona o texto de forma absoluta dentro do div wrapper
        top: "78%", // Posiciona o texto 78% a partir do topo do wrapper
        left: "50%", // Centraliza o texto horizontalmente
        transform: "translate(-50%, -50%)", // Ajusta o texto para ficar centralizado exatamente no meio
        fontSize: 17, // Tamanho da fonte
        width: 200, // Largura do texto
        fontFamily: "'Roboto', sans-serif", // Fonte usada para o texto
        color: "white", // Cor do texto
        textAlign: "center", // Alinhamento central do texto
        backgroundImage: "linear-gradient(rgba(128, 128, 128, 0.6), rgba(128, 128, 128, 0.6))", // Gradiente de fundo com transparência
        padding: 10, // Espaçamento interno do texto
        borderRadius: 8, // Bordas arredondadas do texto
    }
};

// Função auxiliar que retorna a cor da borda baseada no número de estrelas
const getBackgroundColor = (stars) => {
    if (stars <= 2) return 'white'; // Branco para até 2 estrelas
    if (stars <= 4) return '#0ef'; // Azul neon para 3 ou 4 estrelas
    return '#FFD700'; // Dourado para 5 estrelas
};

// Função auxiliar que retorna o box-shadow baseado no número de estrelas
const getBoxShadow = (stars) => {
    if (stars <= 2) return '-5px 10px 20px rgba(255, 255, 255, 0.7)'; // Sombra leve para até 2 estrelas
    if (stars <= 4) return '-5px 10px 40px rgba(0, 191, 255, 0.7)'; // Sombra mais intensa para 3 ou 4 estrelas
    return '-5px 10px 70px rgba(255, 215, 0, 0.7)'; // Sombra mais forte para 5 estrelas
};
