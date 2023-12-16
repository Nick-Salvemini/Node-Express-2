const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('returns "midnight" for input "00:00"', () => {
    expect(timeWord('00:00')).toEqual('midnight');
  });

  test('returns "twelve twelve am" for input "00:12"', () => {
    expect(timeWord('00:12')).toEqual('twelve twelve am');
  });

  test('returns "one o’clock am" for input "01:00"', () => {
    expect(timeWord('01:00')).toEqual("one o’clock am");
  });

  test('returns "six oh one am" for input "06:01"', () => {
    expect(timeWord('06:01')).toEqual('six oh one am');
  });

  test('returns "six ten am" for input "06:10"', () => {
    expect(timeWord('06:10')).toEqual('six ten am');
  });

  test('returns "six eighteen am" for input "06:18"', () => {
    expect(timeWord('06:18')).toEqual('six eighteen am');
  });

  test('returns "six thirty am" for input "06:30"', () => {
    expect(timeWord('06:30')).toEqual('six thirty am');
  });

  test('returns "ten thirty four am" for input "10:34"', () => {
    expect(timeWord('10:34')).toEqual('ten thirty four am');
  });

  test('returns "noon" for input "12:00"', () => {
    expect(timeWord('12:00')).toEqual('noon');
  });

  test('returns "twelve oh nine pm" for input "12:09"', () => {
    expect(timeWord('12:09')).toEqual('twelve oh nine pm');
  });

  test('returns "eleven twenty three pm" for input "23:23"', () => {
    expect(timeWord('23:23')).toEqual('eleven twenty three pm');
  });
});