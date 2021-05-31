import request from 'supertest';

const SERVER_PORT = process.env.OFFLINE_PORT || 3000;

const server = request(`http://localhost:${SERVER_PORT}/dev/`);

export default server;
