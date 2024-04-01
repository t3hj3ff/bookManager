const jwt = require('jsonwebtoken');
require('dotenv').config();
const request = require('supertest');
const app = require('../app');

//JWT token generation for testing
function generateTestToken() {
  const payload = { userId: 1, username: "admin" };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
}

//Example test for getting all Books, i made one xamle, others should be similar to this one.
describe('Books API', () => {
  it('GET /api/bookManager/getAllBooks should fetch all books', async () => {
    const token = generateTestToken();
    const response = await request(app)
      .get('/api/bookManager/getAllBooks')
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
