import {getRandomData} from './random-data-api.js';

const main = async () => {
    console.time("main function execution time");

    const randomData = await getRandomData();

    console.timeEnd("main function execution time");
}
main();