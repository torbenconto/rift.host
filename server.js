import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';
import { sites } from './sites.js';

const app = express();
const PORT = process.env.PORT || 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/sites', (req, res) => {
    res.json(sites);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
