const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
const transactions = [
        {
                transactionType: "Ingreso",
                transactionDescription: "sueldo",
                transactionCategory: "Sueldo",
                transactionAmount: "5000",
                transactionId: 0,
        },
        {
                transactionType: "Egreso",
                transactionDescription: "comida",
                transactionCategory: "Comida",
                transactionAmount: "3000",
                transactionId: 1,
        },
];

app.get("/", (req, res) => {
        res.send(`In the port: ${port}`);
});

app.get("/transactions", (req, res) => {
        res.send(transactions);
});

app.get("/transactions/:id", (req, res) => {
        const transactionId = req.params.id;
        const selectedTransaction = transactions.filter(
                (transaction) => transaction.transactionId == transactionId
        );

        res.send(selectedTransaction);
});

app.listen(port, () => {
        console.log(`Listen in port: ${port} `);
});
