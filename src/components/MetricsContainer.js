import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MetricsContainer = () => {
  const [traveler, setTraveler] = useState(0);
  const [reviewer, setReviewer] = useState(0);
  const [planer, setPlaner] = useState(0);
  const countNum = () => {
    if (planer < 650) {
      setPlaner(planer + 1);
    }
    if (traveler < 350) {
      setTraveler(traveler + 1);
    }
    if (reviewer < 21) {
      setReviewer(reviewer + 1);
    }
  };

  useEffect(() => {
    countNum();
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
`;

export default MetricsContainer;
