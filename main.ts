// const { Bot } = require("grammy");
import { Bot } from "https://deno.land/x/grammy@v1.30.0/mod.ts";
import { someReply } from "./someReply.ts"
import { envRequired } from "./env.ts"
import { someReplyWithStickers } from "./someReply_stickers.ts"
import { random01 } from "./random01.ts"
import { divination } from "./divination.ts";
import { fRandomNumber } from "./fRandomNumber.ts";
// import { fRandomNumber } from './fRandomNumber.ts';

// Create bot object
const botToken = envRequired("BOT_TOKEN")

const bot = new Bot(botToken);
console.log("Алисочка здесь!")

// Listen for messages
bot.command("start", (ctx) => ctx.reply("Здравствуй, как твои дела?"));
bot.command("sticker_id", (ctx) => {
    const stickerId = ctx.msg.reply_to_message?.sticker?.file_id
    if (stickerId) {
        ctx.reply(stickerId)
    }
})
bot.command("divination", (ctx) => ctx.reply(divination()))
bot.command("random", (ctx) => ctx.reply(fRandomNumber(ctx.message.text)));

bot.on("message:text", (ctx) => {
    const message = ctx.message;
    const reply = someReply(message.text)
    if (reply) {
        ctx.reply(reply)
    }
});

bot.on("message:sticker", (ctx) => {
    const message = ctx.message;
    if (message.sticker.emoji) {
        const reply = someReply(message.sticker.emoji)
        if (reply) {
            ctx.reply(reply)
        }

        const hug = someReplyWithStickers(message.sticker.emoji)
        if (hug) {
            ctx.replyWithSticker(hug)
        }
    }
});

bot.on("message:photo", (ctx) => {
    if (random01(0, 1)) {
        if (random01(0, 1)) { ctx.reply("Милая картинка!") }
        else ctx.reply("Милая картинка! Это ты?")
    }
}
    );

// Launch!
bot.start({ drop_pending_updates: true });