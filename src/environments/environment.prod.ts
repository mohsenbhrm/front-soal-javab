const server = 'localhost:32745';

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
