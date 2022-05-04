const validateValue = require('./validateValue');

test('validateValue', () => {
    expect(validateValue(120)).toBe(true)
})

describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(120)).toBe(true)
    })
    test('Меньше корректного', () => {
        expect(validateValue(99)).toBe(false)
    })
    test('Больше корректного', () => {
        expect(validateValue(151)).toBe(false)
    })
    test('Равно пограничному значению снизу', () => {
        expect(validateValue(100)).toBe(false)
    })
    test('Равно пограничному значению сверху', () => {
        expect(validateValue(150)).toBe(false)
    })
})