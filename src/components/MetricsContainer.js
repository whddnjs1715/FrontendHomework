import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Animation from '../hooks/Animation';

const MetricsContainer = () => {
  const [traveler, setTraveler] = useState(0);
  const [reviewer, setReviewer] = useState(0);
  const [planer, setPlaner] = useState(0);
  const countNum = () => {
    planer < 650 ? setPlaner(planer + 50) : setPlaner(650);
    traveler <= 350 ? setTraveler(traveler + 50) : setTraveler(350);
    reviewer <= 20 ? setReviewer(reviewer + 3) : setReviewer(20);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      countNum();
    }, 50);
  }, [planer]);
  return (
    <MetContainer>
      <div>
        <strong>
          <span>{traveler}</span>만 명
        </strong>
        의 여행자
      </div>
      <div>
        <strong>
          <span>{reviewer}</span>만 개
        </strong>
        의 여행 리뷰
      </div>
      <div>
        <strong>
          <span>{planer}</span>만 개
        </strong>
        의 여행 일정
      </div>
    </MetContainer>
  );
};

const MetContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  animation-name: ${Animation};
  animation-duration: 800ms;
  animation-iteration-count: 1;
  animation-direction: reverse;
`;

export default MetricsContainer;
