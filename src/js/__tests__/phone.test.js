import formatPhoneNumber from "../numbers";

test('Number with +', () => {
    const number = formatPhoneNumber('+7 960 000 00 00')
    expect(number).toBe('+79600000000')
})

test('Number with ()', () => {
    const number = formatPhoneNumber('8 (927) 000-00-00')
    expect(number).toBe('+79270000000')
})

test('FOreign number with +', () => {
    const number = formatPhoneNumber('+86 000 000 0000')
    expect(number).toBe('+860000000000')
})

test('Number Error', () => {
    expect(() => formatPhoneNumber('+aaa45')).toThrow('Это не номер телефона');
});
