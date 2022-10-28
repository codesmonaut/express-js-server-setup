require(`dotenv`).config();

const express = require(`express`);
const shoes = require(`./routes/shoes`);

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(`/api/shoes`, shoes);

app.listen(
    port,
    console.log(`Server running on port http://localhost:${port}`)
)