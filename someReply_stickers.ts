import { randomNumber } from './randomNumber.ts'

export const someReplyWithStickers = (message: string) => {

    const reHug = /🤗|🫂|👐/iu
    const hug = [
        "CAACAgQAAx0CY7Cf7wACh5NhlXUDRXlvTkZFNNS_GLh-7T9ULQACKgUAAqN9MRWciyhLPFzwoSIE",
        "CAACAgQAAx0CY7Cf7wACh5RhlXUEZxLs9GMndsRetm-zho8MkwADAQACo30xFWEJPdmbHlclIgQ",
        "CAACAgIAAx0CY7Cf7wACh6FhlXU9SWVDW09YRwE6rJvUt6CL5wACWAQAAlojPQsLdZpTyZH4BiIE",
        "CAACAgIAAxkBAANOYZV44gqs1ks_kuWGzPoRtX2ot80AAvAMAAI8uylJCnCJnX3WWZsiBA",
        "CAACAgUAAxkBAANPYZV4-zEWCPW2Z_z9OJiFmBogRd8AApceAALGUcYVtHctOmTkn-QiBA",
        "CAACAgUAAxkBAANQYZV5CQw3N2_tX3l67OF_Xx8iisAAAgYcAALGUcYVotOGp-jHQwYiBA",
        "CAACAgUAAxkBAANRYZV5DB6AHcoNIz1Nn0nDDyyBR9IAAhMcAALGUcYVfJ3spYRsUsYiBA",
        "CAACAgIAAx0CY7Cf7wACh6lhlXVs5WvliMMlLbNCW2dMNhiRjwACDQEAAu4HRQABmMJSjuQ4vN0iBA",
        "CAACAgIAAx0CY7Cf7wACh6thlXVu8OO8wpYiSpbiiC7M7UWxmAACDgEAAu4HRQAB3k-Avfp6qzsiBA"]
    
    if (reHug.test(message)) {
        return hug[randomNumber(0, hug.length)]
    }
}