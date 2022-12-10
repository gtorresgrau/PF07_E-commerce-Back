
const PORT=process.env.PORT  || 3001
const DB_USER=process.env.DB_USER  
const DB_PASSWORD=process.env.DB_PASSWORD  
const DB_HOST=process.env.DB_HOST  
const DB_NAME= process.env.DB_NAME || 'sneakers'
const DB_PORT= process.env.DB_PORT || 5432
const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS
module.exports={PORT, DB_USER,DB_PASSWORD,DB_HOST, DB_NAME,DB_PORT, GOOGLE_APPLICATION_CREDENTIALS} 