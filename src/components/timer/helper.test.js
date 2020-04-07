import { formatSeconds } from './helper';

test('should format seconds', () => {
  expect(formatSeconds(60)).toEqual('1min. 0segs.');
  expect(formatSeconds(300)).toEqual('5min.');
  expect(formatSeconds(600)).toEqual('10min.');
  expect(formatSeconds(10)).toEqual('10segs.');
  expect(formatSeconds(65)).toEqual('1min. 5segs.');
  expect(formatSeconds(120)).toEqual('2min. 0segs.');
  expect(formatSeconds(0)).toEqual('0segs.');
  expect(formatSeconds(4200)).toEqual('70min.');
});
