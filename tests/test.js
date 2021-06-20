test ('Fake Test', () => {
    expect(true).toBeTruthy();
})

test1('Fake Two', () => {
    expect(false).toBeTruthy();
})

const add = jest.fn(() => 3);


// import { add, total } from './functionToTest'

// console.log(add(1, 2))


// //Unit test
// //It only tests one thing
test2('add', () => {
    const value = add(1,2)
    expect(add).toHaveBeenCalledTimes(1)
    // expect(value).toBe(3)
});

// //integration tests
// //Tests things working together
// test('total', () => {
//     expect(total(5, 20)).toBe('$25');
// })