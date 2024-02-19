import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';

// import ShareButton from '../ShareButton';
import DownloadReportButton from '../DownloadReportButton';

import { calculateScore, calculateGrade, timeConverter } from '../../utils';

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz,
  userDetails, // Add userDetails prop
}) => {
  
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <Segment>
      <Header as="h3" textAlign="center" block>
        User Name: {userDetails.name} {/* Display user's name */}
      </Header>
      <Header as="h3" textAlign="center" block>
        User ID: {userDetails.id} {/* Display user's ID */}
      </Header>
      <Header as="h1" textAlign="center" block>
        {remarks}
      </Header>
      <Header as="h2" textAlign="center" block>
        Grade: {grade}
      </Header>

      <Header as="h3" textAlign="center" block>
        Total Questions: {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center" block>
        Correct Answers: {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center" block>
        Your Score: {score}%
      </Header>
      <Header as="h3" textAlign="center" block>
        Passing Score: 60%
      </Header>
      <Header as="h3" textAlign="center" block>
        Time Taken:{' '}
        {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Header>
      <div style={{ marginTop: 35 }}>
        <Button
          primary
          content="Play Again"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          color="teal"
          content="Back to Home"
          onClick={resetQuiz}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
        {/* <ShareButton /> */}
        <DownloadReportButton />
      </div>
    </Segment>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  userDetails: PropTypes.shape({ // Define shape for userDetails prop
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Stats;
