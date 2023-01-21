const axios = require('axios');
const config = require('./config');
require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler'); 
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');

// custom middleware logger
app.use(logger);

// // Cross Origin Resource Sharing
app.use(cors()); 

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// //serve static files
// app.use('/', express.static(path.join(__dirname, '/public')));

// routes
//app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use(verifyJWT);
app.use('/users', require('./routes/api/users'));

app.use('/search', require('./routes/search'))

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

// const headers = {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET',
// };

// const server = createServer((req, res) => {
//   const requestURL = url.parse(req.url);
//   const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
//   const { keyword, location, country = 'us' }  = decodedParams;

//   const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&what=${keyword}&where=${location}`;
//     if (req.method === 'GET') {
//       axios.get(targetURL)
//         .then(response => {
//           res.writeHead(200, headers);
//           res.end(JSON.stringify(response.data));
//         })
//         .catch(response => {
//           console.log(response);
//           res.writeHead(500, headers);
//           res.end(JSON.stringify(response));
//         });
//     } 
// });


app.listen(8000, () => {
  console.log('Server listening');
} );


// const decodeParams = searchParams => Array
//   .from(searchParams.keys())
//   .reduce((acc, key) => ({ ...acc, [key]: searchParams.get(key) }), {});