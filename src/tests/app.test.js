import request from 'supertest';
import express from 'express';
import { notFound, errorHandler } from '../middleware/errorMiddleware.js';

const app = express();

app.get('/', (req, res) => {
    res.send('test');
});

app.use(notFound);
app.use(errorHandler);

describe('App', () => {
    it('should return 200 for the root path', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });

    it('should return 404 for a non-existent path', async () => {
        const res = await request(app).get('/non-existent-path');
        expect(res.statusCode).toEqual(404);
    });
});
