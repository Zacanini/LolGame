import React from "react";
import Button from "@mui/material/Button";
import { ChampionCard } from "./ChampionCard";
import { useChampionCard } from "./useChampionCard";

export const Imagem1 = () => {
    const { carta, championName, skinName, rarityStars, loading, error, mudaCarta } = useChampionCard();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={styles.container}>
            <ChampionCard
                carta={carta}
                rarityStars={rarityStars}
                championName={championName}
                skinName={skinName}
            />
            <Button
                style={styles.button}
                variant="contained"
                sx={{
                    backgroundColor: '#9e064a',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#575048',
                    }
                }}
                onClick={mudaCarta}
            >
                Sorteie uma nova carta
            </Button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        minHeight: "100vh",
        position: "relative"
    },
    button: {
        marginTop: 50,
    }
};
