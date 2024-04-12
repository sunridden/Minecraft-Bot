const mineflayer = require("mineflayer");

let settings = {
    host: "0.0.0.0",
    username: "Phorem",
    port: '35327',
    version: '1.8.9'
};

const bot = mineflayer.createBot(settings);

bot.once("spawn", () => {
    bot.chat("Hello!");
})

bot.on("move", ()=> {
    let friend = bot.nearestEntity();

    if (friend) {
        bot.lookAt(friend.position.offset(0, friend.height, 0)); // bot looks at height of entity
    }
})

bot.on("entityHurt", (entity)=> {
    let walking = false;

    if (entity != bot.entity) return;
    
    walking = !walking;

    bot.setControlState("forward", walking);
})

bot.on('kicked', console.log)
bot.on('error', console.log);