import {express} from 'express';
import {bodyParser} from 'body-parser';

const investigacaoRouter = require('./models/investigacoes')
const app = express();

app.use(bodyParser.json())
app.use(express.static('public'));

