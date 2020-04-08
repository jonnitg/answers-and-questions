/**
 *
 * @param {array} questions
 * @param {object} answers
 */
export const getCorrectAnswers = (questions, answers) => {
  let correctAnswer = 0;
  for (const question of questions) {
    const isCorrect = answers[question.id] === question.correctAnswerId;

    if (isCorrect) {
      correctAnswer++;
    }
  }
  return correctAnswer;
};
