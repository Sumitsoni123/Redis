const client = require('./client')

const init = async () => {
    // await client.set('user:4', "Shibbi")
    await client.expire('user:4', 5)
    const result = await client.get('user:4')
    console.log('result =', result);

};

init()