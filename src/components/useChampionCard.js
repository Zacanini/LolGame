import { useState, useEffect } from 'react';
import { useChampion } from './ChampionContext'; // Importa o contexto de campeão para compartilhar dados entre componentes

const baseImagePath = "./dragon_tail/img/champion/loading/"; 
// Caminho base para as imagens dos campeões

const getRarityStars = (num) => {
    // Função que determina a quantidade de estrelas com base no número da skin
    if (num <= 5) return 1;
    if (num <= 15) return 2;
    if (num <= 30) return 3;
    if (num <= 55) return 4;
    return 5; // Retorna 5 estrelas se o número da skin for maior que 55
};

const getRandomSkin = (skins) => {
    // Função que retorna uma skin aleatória, com pesos para skins mais raras
    const weightedSkins = skins.flatMap(skin => Array(100 - skin.num).fill(skin));
    // Cria um array "pesado" onde skins com números menores (mais comuns) aparecem mais vezes
    const randomIndex = Math.floor(Math.random() * weightedSkins.length);
    // Seleciona um índice aleatório baseado no array "pesado"
    return weightedSkins[randomIndex];
    // Retorna a skin correspondente ao índice aleatório
};

export const useChampionCard = () => {
    const [carta, setCarta] = useState(null); // Estado para armazenar a URL da imagem da carta
    const [championName, setChampionName] = useState(''); // Estado para armazenar o nome do campeão
    const [skinName, setSkinName] = useState(''); // Estado para armazenar o nome da skin (se não for padrão)
    const [rarityStars, setRarityStars] = useState(0); // Estado para armazenar a quantidade de estrelas de raridade
    const [championsData, setChampionsData] = useState(null); // Estado para armazenar os dados dos campeões
    const [loading, setLoading] = useState(true); // Estado para indicar se os dados ainda estão carregando
    const [error, setError] = useState(null); // Estado para armazenar erros na busca de dados

    const { updateChampion } = useChampion(); // Hook customizado para acessar o contexto do campeão

    useEffect(() => {
        const fetchChampionsData = async () => {
            try {
                const response = await fetch("/combined_champions.json");
                // Busca os dados combinados dos campeões de um arquivo JSON
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json(); // Converte a resposta para JSON
                setChampionsData(data); // Armazena os dados dos campeões no estado
                setInitialImage(data); // Define a imagem inicial ao carregar os dados
            } catch (err) {
                setError(err.message); // Armazena o erro caso a busca falhe
            } finally {
                setLoading(false); // Define o estado de loading como falso após a tentativa de fetch
            }
        };

        const setInitialImage = (data) => {
            const { chosenChampion, randomSkin } = getNewChampionCard(data);
            // Pega um campeão e uma skin aleatória ao carregar os dados
            setChampionCard(chosenChampion, randomSkin);
            // Define os dados da carta inicial
        };

        fetchChampionsData(); // Chama a função de busca dos dados ao montar o componente
    }, []);

    const getNewChampionCard = (data) => {
        const championKeys = Object.keys(data);
        // Pega as chaves (nomes) de todos os campeões
        const randomChampionKey = championKeys[Math.floor(Math.random() * championKeys.length)];
        // Seleciona uma chave aleatória
        const chosenChampion = data[randomChampionKey].data[randomChampionKey];
        // Pega os dados do campeão correspondente à chave selecionada
        const randomSkin = getRandomSkin(chosenChampion.skins);
        // Seleciona uma skin aleatória para o campeão escolhido
        return { chosenChampion, randomSkin };
        // Retorna o campeão escolhido e a skin aleatória
    };

    const setChampionCard = (chosenChampion, randomSkin) => {
        const nomeChampion = `${chosenChampion.id}_${randomSkin.num}`;
        // Cria um nome de arquivo para a imagem da carta baseado no ID do campeão e no número da skin
        const newChampion = {
            carta: `${baseImagePath}${nomeChampion}.jpg`,
            // Define o caminho completo da imagem da carta
            championName: chosenChampion.name,
            // Nome do campeão
            skinName: randomSkin.num !== 0 ? randomSkin.name : '',
            // Nome da skin (ou vazio se for a skin padrão)
            rarityStars: getRarityStars(randomSkin.num)
            // Define a quantidade de estrelas com base no número da skin
        };

        setCarta(newChampion.carta); // Atualiza o estado com a nova imagem da carta
        setChampionName(newChampion.championName); // Atualiza o estado com o nome do campeão
        setSkinName(newChampion.skinName); // Atualiza o estado com o nome da skin
        setRarityStars(newChampion.rarityStars); // Atualiza o estado com a quantidade de estrelas

        if (updateChampion) {
            updateChampion(newChampion); // Atualiza o contexto do campeão se a função estiver disponível
        }
    };

    const mudaCarta = () => {
        // Função para mudar a carta, chamada ao clicar no botão
        if (!championsData) return;
        // Se os dados dos campeões não estiverem carregados, a função retorna sem fazer nada
        const { chosenChampion, randomSkin } = getNewChampionCard(championsData);
        // Pega um novo campeão e uma nova skin aleatória
        setChampionCard(chosenChampion, randomSkin);
        // Define os dados da nova carta
    };

    return { 
        carta, 
        championName, 
        skinName, 
        rarityStars, 
        loading, 
        error, 
        mudaCarta 
        // Retorna os valores e funções necessários para o componente que usa este hook
    };
};
