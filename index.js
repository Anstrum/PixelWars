import * as tchat from "./src/private-modules/tchat.js"
import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


tchat.Init(8888)

tchat.Start()



const app = express();
app.use(express.static(__dirname + "/src/public"))

app.get('/', (req, res) => {
    res.sendFile("./src/public/index.html", {root: __dirname})
});
app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);