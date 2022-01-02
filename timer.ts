export const Timer = (startTime: number = Date.now()) => {
    // convert time in ms to time in seconds
    startTime = Math.floor(startTime / 1000)

    async (ctx, next) => {
        if (ctx.message && startTime - ctx.message.date < 60) { // if message exist and date < start time
            return
        } await next()
    }
} 