let API_HOST = '';

if(process.env.NODE_ENV == 'development')
  API_HOST = 'http://localhost:3000';
else if(process.env.NODE_ENV == 'production')
  API_HOST = 'https://transportcompany-api.herokuapp.com/'


export { API_HOST };
