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
    bot.setControlState("sprint", true);
    bot.setControlState("jump", true);
})

bot.on("move", ()=> {
    let entity = bot.nearestEntity(e => e.isValid && (e.type == 'mob' || e.type == 'player'));
    
    if (entity) {
        if (entity.isValid) {
            bot.lookAt(entity.position.offset(0, entity.height, 0)); // bot looks at height of entity

            bot.attack(entity, true);
        }
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