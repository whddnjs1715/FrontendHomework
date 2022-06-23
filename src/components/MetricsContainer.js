import styled from 'styled-components';

const MetricsContainer = () => {
  return (
    <MetContainer>
      <div>
        <strong>
          <span>700</span>만 명
        </strong>
        의 여행자
      </div>
      <div>
        <strong>
          <span>100</span>만 개
        </strong>
        의 여행 리뷰
      </div>
      <div>
        <strong>
          <span>470</span>만 개
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
