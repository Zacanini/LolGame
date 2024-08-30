import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({ onClick }) => (
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
        onClick={onClick}
    >
        Sorteie uma nova carta
    </Button>
);

const styles = {
    button: {
        marginTop: 50,
    }
};

export default ButtonComponent;
