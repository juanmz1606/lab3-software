const request = require('supertest');
const app = require('./index');  // Importa solo el 'app', no el servidor

describe('GET /', () => {
  it('responds with Hello, world!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, world!');
    expect(response.status).toBe(200);
  });
});
