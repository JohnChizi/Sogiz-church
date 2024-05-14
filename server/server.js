const server = require('./app');
require('dotenv').config();

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}...`);
    // console.log(process.env.NODE_ENV);
});
