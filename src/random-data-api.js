import redis from 'redis';
import { connectToRedis } from './redis-config.js';
const key = 'users';
export const getRandomData = async () => {

    const client = await connectToRedis();
    let users = await client.get(key);

    if (users) {
        console.log('Fetching from Redis...');
        return JSON.parse(users);
    }

    users = await fetch('https://random-data-api.com/api/v2/users')

    users = await users.json()

    client.set(key, JSON.stringify(users));

    return users;
}