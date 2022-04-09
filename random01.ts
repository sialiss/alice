export const random01 = (min : number, max : number) => {
    return Math.round(Math.random() * (max - min) + min)
}