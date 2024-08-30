import React from "react";
import StarIcon from '@mui/icons-material/Star'; 
// Importa o ícone de estrela do Material-UI para ser usado na exibição das estrelas de raridade

const RarityStars = ({ stars }) => (
    <div style={styles.stars}>
        {[...Array(stars)].map((_, index) => (
            // Cria um array de tamanho igual ao número de estrelas e mapeia sobre ele para renderizar os ícones de estrela
            <StarIcon key={index} style={styles.starIcon} />
            // Renderiza um ícone de estrela para cada elemento no array, usando o índice como chave
        ))}
    </div>
);

const styles = {
    stars: {
        position: "absolute", // Posiciona o contêiner das estrelas de forma absoluta em relação ao elemento pai
        top: "62%", // Define a posição da parte superior do contêiner das estrelas como 62% do topo do elemento pai
        left: "50%", // Centraliza horizontalmente o contêiner das estrelas
        transform: "translate(-50%, -50%)", // Ajusta a posição para centralizar o contêiner completamente
        display: 'flex', // Define um layout flexível para o contêiner das estrelas
        justifyContent: 'center' // Centraliza os ícones de estrela dentro do contêiner
    },
    starIcon: {
        color: 'gold', // Define a cor das estrelas como dourada
        marginLeft: 5, // Adiciona uma margem à esquerda para espaçamento entre as estrelas
        marginTop: 10, // Adiciona uma margem superior para posicionar as estrelas abaixo do contêiner pai
        fontSize: 30 // Define o tamanho da fonte dos ícones de estrela (o que afeta o tamanho das estrelas)
    },
};

export default RarityStars; 
// Exporta o componente RarityStars como o padrão, permitindo que seja importado e usado em outros arquivos
