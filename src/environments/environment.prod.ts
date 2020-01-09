const server = 'https://localhost:5001';

export const environment = {
  production: true,
  apiConfig: {
    apiEnv: 'dev',
    timeExpired: 1200,
    credentials: {
      clientId: '',
      clientSecret: ''
    },
    baseUrl: server,
    apiUrls: []
  }
};
