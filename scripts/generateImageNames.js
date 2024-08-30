import fs from 'fs';
import path from 'path';

// Usar __dirname em módulos ES pode requerer uma abordagem alternativa
const __dirname = path.resolve(); // Para obter o diretório raiz

const imagesDir = path.join(__dirname, './dragon_tail/img/champion/loading');
const outputFile = path.join(imagesDir, 'imageNames.js');

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Não foi possível listar os arquivos:', err);
        return;
    }

    // Filtra apenas os arquivos de imagem, se necessário
    const imageNames = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
                            .map(file => path.basename(file, path.extname(file)));

    const content = `
    const imageNames = ${JSON.stringify(imageNames, null, 2)};

    export default imageNames;
    `;

    fs.writeFile(outputFile, content, err => {
        if (err) {
            console.error('Não foi possível escrever o arquivo:', err);
        } else {
            console.log('Arquivo imageNames.js gerado com sucesso!');
        }
    });
});