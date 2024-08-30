import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o caminho do diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho da pasta onde estão os arquivos JSON
const dirPath = path.join(__dirname, 'dragon_tail', '14.17.1', 'data', 'pt_BR', 'champion');

// Função para ler todos os arquivos JSON e combiná-los em um único objeto
const combineJSONFiles = (dirPath) => {
    const combinedData = {};

    // Ler todos os arquivos da pasta
    fs.readdirSync(dirPath).forEach(file => {
        if (path.extname(file) === '.json') {
            const filePath = path.join(dirPath, file);
            const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            // Nome do arquivo sem a extensão será a chave no objeto combinado
            const key = path.basename(file, '.json');
            combinedData[key] = fileData;
        }
    });

    return combinedData;
};

// Criar o objeto combinado
const combinedData = combineJSONFiles(dirPath);

// Caminho onde o novo arquivo JSON será salvo
const outputFilePath = path.join(__dirname, 'combined_champions.json');

// Escrever o objeto combinado em um novo arquivo JSON
fs.writeFileSync(outputFilePath, JSON.stringify(combinedData, null, 2), 'utf8');

console.log('Arquivo combinado criado com sucesso!');
