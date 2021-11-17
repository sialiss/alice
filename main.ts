import { Bot } from "https://deno.land/x/grammy@v1.4.0/mod.ts";
import { someReply } from "./someReply.ts"
import { envRequired } from "./env.ts"

// Create bot object
const botToken = envRequired("BOT_TOKEN")

const bot = new Bot(botToken);
console.log("Алисочка здесь!")
// --allow-net разрешает интернеты
// --allow-env разрешает читать переменные среды
// deno run --allow-env --allow-net main.ts

// Listen for messages
bot.command("start", (ctx) => ctx.reply("Здравствуй, как твои дела?"));
bot.on("message:text", (ctx) => {
    const message = ctx.message;
    const greetings = someReply(message.text)
    if (greetings) {
        ctx.reply(greetings)
    }
});
bot.on("message:sticker", (ctx) => {
    const message = ctx.message;
    if (message.sticker.emoji) {
        const greetings = someReply(message.sticker.emoji)
        if (greetings) {
            ctx.reply(greetings)
    }}
});
bot.on("message:photo", (ctx) => ctx.reply("Милая картинка!"));

// Launch!
bot.start({drop_pending_updates: true});