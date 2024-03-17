// conection a redis
import redis from 'redis';
export const connectToRedis = async () => {
    const client = redis.createClient();

    client.on('connect', () => console.log('Connected to Redis...'));

    client.on('error', (err) => console.log('Something went wrong ' + err));

    await client.connect();

    return client;
}