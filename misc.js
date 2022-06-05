export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const unary = f => x => f(x)

export const construct = (Ctor, ...params) => (...args) => new Ctor(...args, ...params)

export const attempt = f => {
    try {
        return f()
    } catch (e) {
        return null
    }
}
