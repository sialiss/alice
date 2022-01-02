import { Bot } from "https://deno.land/x/grammy@v1.4.0/mod.ts";
import { someReply } from "./someReply.ts"
import { envRequired } from "./env.ts"
import { someReplyWithStickers } from "./someReply_stickers.ts"
import { gadanie } from "./gadanie.ts"
import { random01 } from "./random01.ts"

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
bot.command("gadanie", (ctx) => ctx.reply(gadanie()))

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
    if (random01()) {
        ctx.reply("Милая картинка!")
    }
}
    );

// Launch!
bot.start({drop_pending_updates: true});