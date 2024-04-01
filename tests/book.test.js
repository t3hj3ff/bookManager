const request = require('supertest');
const app = require('../app');

//This is example test for getAllBooks
describe('Books API', () => {
  it('GET /api/bookManager/getAllBooks should fetch all books', async () => {
    const response = await request(app).get('/api/bookManager/getAllBooks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
