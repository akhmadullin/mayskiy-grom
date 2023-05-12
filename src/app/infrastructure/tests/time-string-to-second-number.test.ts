import timestringToSecondNumber from '../time-string-to-second-number';

describe('timestringToSecondNumber helper', () => {
    test('seconds only', () => {
        expect(timestringToSecondNumber('5')).toBe(5);
        expect(timestringToSecondNumber('59')).toBe(59);
    });

    test('minutes and seconds', () => {
        expect(timestringToSecondNumber('1:06')).toBe(66);
        expect(timestringToSecondNumber('10:34')).toBe(634);
    });

    test('hours, minutes and seconds', () => {
        expect(timestringToSecondNumber('1:06')).toBe(66);
        expect(timestringToSecondNumber('10:34')).toBe(634);
    });
});