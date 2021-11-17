import { randomNumber } from './randomNumber.ts'

export const someReply = (message: string) => {
    const reHi = /(?<=[\s,.:;"'()]|^)(привет|добр[а-яё]+ утр[а-яё]+|здравствуй|ghbdtn|sup|моё почтение|hi|Дай Бог вам здоровья|вечер в хату|👋|✋)/iu
    const greetings = ['привет', 'доброе утро', 'здравствуйте', 'hi', 'моё почтение', 'приветули', 'приветик', 'приветствую',
        'Дай Бог вам здоровья', 'охайо', 'жизнь ботам смерть мясным мешкам']
    
    const reHiAlice = /алис[а-яё]|alice/i
    const respond = 'Алисочка здесь!'
    
    if (reHi.test(message)) {
        return greetings[randomNumber(0, greetings.length)]
    }
    else if (reHiAlice.test(message)) {
        return respond
    }
}