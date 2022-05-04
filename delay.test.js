const delay = require('./delay');

describe('delay', () => {
    test('Correct value', async () => {
        const mul = await delay(() => 6 * 5, 1000)
        expect(mul).toBe(30)
    })
})