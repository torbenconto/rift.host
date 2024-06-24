import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';

const app = express();
const PORT = 8086;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'src/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
