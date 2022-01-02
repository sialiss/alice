import { randomNumber } from './randomNumber.ts'

export const gadanie = () => {
    const results = ['ты умрёшь', 'тебе осталось жить 5 дней', 'всё будет хорошо', 'ты победиш', 'соболезную', 'удачи',
        "лучше попробуй ещё раз", "не отчаивайтесь, если результат гадания неблагоприятный", "YAROSLAV", "иди погуляй",
        "готовь жопу"]
    
    return results[randomNumber(0, results.length)]
}