export default {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8081/api' : '/api',
  successCode: [200, 0],
  requestTimeout: 10 * 1000,
  contentType: 'application/json;charset=UTF-8',
  invalidCode: -1,
};
