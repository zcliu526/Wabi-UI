test('test common matcher', () => {
    expect(2+2).toBe(4);
    expect(2+2).not.toBe(3);
})

test('test true or false', () => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
})