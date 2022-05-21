const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Favorite Medias',
    description: 'This is an API for the user to be able to store favorite bookas and movies',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  securityDefinitions: {
    "oauth": {
      "type": "oauth2",
      "authorizationUrl": "http://localhost:3000/login/oauth/authorize",
      "description":  "INSTRUCTIONS: 1) Click Authorize. 2) Authenticate with your account. 3) Get your access_token and copy it. 4) Paste it into any request you make.",
      "flow": "Follow instructions"
    }
  },
}

const outputFile = 'swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
