const dotenv = require('dotenv');
dotenv.config();


const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const serverPort = process.env.PORT;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;

if (!audience) {
    throw new Error(
        '.env is missing the definition of an AUTH0_AUDIENCE environmental variable'
    );
}

if (!domain) {
    throw new Error(
        '.env is missing the definition of an AUTH0_DOMAIN environmental variable'
    );
}

if (!serverPort) {
    throw new Error(
        '.env is missing the definition of a API_PORT environmental variable'
    );
}

if (!clientOriginUrl) {
    throw new Error(
        '.env is missing the definition of a APP_ORIGIN environmental variable'
    );
}


const clientOrigins = [ 
    'http://localhost:3000/',
    'http://localhost:3001/',
    'https://pf-07-e-commerce-front.vercel.app/:path*',
    'https://pf-07-e-commerce-front.vercel.app/sneakers',
    'https://pf-07-e-commerce-front.vercel.app/admin',
    'https://pf-07-e-commerce-front.vercel.app/profile',
    'https://pf-07-e-commerce-front.vercel.app/filter',

    'https://pf07e-commerce-back-production.up.railway.app/:path*', 
    'https://pf07e-commerce-back-production.up.railway.app/payment', 
    'https://pf07e-commerce-back-production.up.railway.app/postuser', 
    'https://pf07e-commerce-back-production.up.railway.app/user',
    'https://pf07e-commerce-back-production.up.railway.app/notificar',
];


module.exports = {
    audience,
    domain,
    serverPort,
    clientOriginUrl,
    clientOrigins,
};
