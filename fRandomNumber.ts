import { randomNumber } from './randomNumber.ts';

export const fRandomNumber = (message: string) => {
  const parts = message.split(" ");
  const min = parseInt(parts[1], 10);
  const max = parseInt(parts[2], 10);

  if (isNaN(min) || isNaN(max)) {
    return "Не пытайся обмануть меня. Пример команды: /random 1 10";
  }
  return `Вселенная сказала ${randomNumber(min, max)}`;
};