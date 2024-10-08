import React from "react";
import { sortearIndice } from "../utils/sorteiaIndice";

export const campeoesLOL = [
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe",
    "AurelionSol", "Azir", "Bard", "BelVeth", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille",
    "Cassiopeia", "ChoGath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise",
    "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",
    "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna",
    "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "KaiSa", "Kalista", "Karma", "Karthus", "Kassadin",
    "Katarina", "Kayle", "Kayn", "Kennen", "KhaZix", "Kindred", "Kled", "KogMaw", "KSante", "LeBlanc",
    "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar",
    "Maokai", "MasterYi", "Milio", "MissFortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus",
    "Neeko", "Nidalee", "Nilah", "Nocturne", "NunuWillump", "Olaf", "Orianna", "Ornn", "Pantheon",
    "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "RenataGlasc", "Renekton",
    "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco",
    "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas",
    "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle",
    "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "VelKoz",
    "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath",
    "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe",
    "Zyra"
];
// Função que consome o JSON
export const getCampeao = async () => {

    // Sorteia um índice para escolher um campeão aleatório
    const indice = sortearIndice(campeoesLOL);
    const campeaoAleatorio = campeoesLOL[indice];

    // Faz a requisição para o JSON
    const response = await fetch("./combined_champions.json"); // Corrigido para usar fetch e adicionar .json no final
    const data = await response.json();

    // Adicionando logs para diagnosticar
    console.log("Campeão Aleatório:", campeaoAleatorio);
    console.log("Dados Retornados:", data);
    console.log("Campeão no JSON:", data[campeaoAleatorio]);


    // Verifica se o campeão existe no JSON retornado
    if (data[campeaoAleatorio] && data[campeaoAleatorio].data) {
        return data[campeaoAleatorio].data[campeaoAleatorio];
    } else {
        return data.Ekko.data.Ekko 
    }
};