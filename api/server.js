const express = require('express');
const htmlRoutes = require('./src/routes/ProblemsRoutes');
const userRouter = require('./src/routes/UserRoutes')
const cors = require('cors');


const cookieParser = require("cookie-parser")
const app = express();
const port = 3000;


app.use(cookieParser());

app.use(cors())

require('./src/database/index')


require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// app.use('/', express.static(path.join(__dirname, '/src/Views')))
app.use('/index/', htmlRoutes);

app.use('/user/', userRouter);


/*
app.all('*', (req, res, next) => {
    console.log("wow")
    const err = new CustomError(`Não foi possivel encontrar ${req.originalUrl} no servidor`, 404);
    next(err);
});
*/


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
});




app.listen(port, () => console.log("Server Running on port " + port));