import React, { useState } from 'react';
import data from 'data/questions.json';
import Stepper from 'components/stepper';
import Score from 'components/score';
import Start from 'components/start';

/**
 * @todo Set limit time to answer the test
 */
const TestWrapper = () => {
  const [phase, setPhase] = useState(0);
  const [answers, setAnswers] = useState({});
  const { questions } = data;

  const nextPhase = () => {
    setPhase(phase + 1);
  };

  const resetPhases = () => {
    setAnswers({});
    setPhase(0);
  };

  const completeTest = (answers) => {
    setAnswers(answers);
    nextPhase();
  };

  if (phase === 1) {
    return <Stepper questions={questions} onCompleteTest={completeTest} />;
  }

  if (phase === 2) {
    return (
      <Score
        questions={questions}
        answers={answers}
        resetPhases={resetPhases}
      />
    );
  }

  // default start
  return <Start questionsAmount={questions.length} nextPhase={nextPhase} />;
};

export default TestWrapper;
