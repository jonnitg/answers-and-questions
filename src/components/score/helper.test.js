import { getCorrectAnswers } from './helper';
import data from 'data/questions.json';

test('should get correct answers', () => {
  const { questions } = data;

  // One correct answer
  expect(
    getCorrectAnswers(questions, {
      one: 'b',
    })
  ).toEqual(1);

  // Zero correct answer
  expect(
    getCorrectAnswers(questions, {
      one: 'a',
    })
  ).toEqual(0);
});
