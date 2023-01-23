const express = require('express');
const app = express();
const port = 8000;
// const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler'); 
const fileUpload = require('express-fileupload')

// // custom middleware logger
app.use(logger);
app.use(cors());

// // built-in middleware to handle urlencoded form data
// app.use(express.urlencoded({ extended: false }));

// // built-in middleware for json 
app.use(express.json());

//middleware for uploading files/images
app.use(fileUpload());


// // routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/api/users'));
app.use('/', require('./routes/search'))

// app.use('/uploadimage', require('./routes/uploadimage'))
// app.post('/upload', (req, res) =>{
//     //Log the files to the console
//     console.log(req.body)

//     // All good
//     res.sendStatus(200)
// })

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

 app.use(errorHandler);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})