const express = require('express');
const htmlRoutes = require('./src/routes/ProblemsRoutes');


const app = express();
const port = 3000;

require('./src/database/index')


app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// app.use('/', express.static(path.join(__dirname, '/src/Views')))
app.use('/index/', htmlRoutes);


/*
app.all('*', (req, res, next) => {
    console.log("wow")
    const err = new CustomError(`Não foi possivel encontrar ${req.originalUrl} no servidor`, 404);
    next(err);
});
*/


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
});




app.listen(port, () => console.log("Server Running on port " + port));+9