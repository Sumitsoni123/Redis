const client = require("./client");

const init = async () => {
    // await client.lpush('chat:1', "hii")
    // await client.lpush('chat:1', "hello")
    // await client.lpush('chat:1', "chutiye")
    // await client.rpush('chat:1', "bhagg")

    // const result = await client.blpop('chat:1', 5)
    // console.log(result);

    const list = await client.lrange('chat:1', 0, 3)
    console.log(list);
};

init()