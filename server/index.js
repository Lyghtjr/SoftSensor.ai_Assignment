const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/index')

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products",productRouter);

const PORT =  5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

