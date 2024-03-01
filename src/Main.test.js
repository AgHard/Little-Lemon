// Main.test.js

import { initializeTimes, updateTimes } from './Main'; // Assuming initializeTimes and updateTimes are exported from Main

test('initializeTimes returns initial available times', () => {
    const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same available times', () => {
    const currentDate = new Date(); // Current date
    const currentTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    const updatedTimes = updateTimes(currentDate, currentTimes);
    expect(updatedTimes).toEqual(currentTimes);
});
