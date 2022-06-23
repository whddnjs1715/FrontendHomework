import styled, { keyframes } from 'styled-components';
import ContentLogo from '../components/ContentLogo';
import MetricsContainer from '../components/MetricsContainer';
import AwardsContainer from '../components/AwardsContainer';

const Main = () => {
  return (
    <Container className="container">
      <Inner className="inner">
        <ContentLogo />
        <MetricsContainer />
        <AwardsContainer />
      </Inner>
    </Container>
  );
};

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  min-width: 1200px;
`;

const Inner = styled.div`
  margin: 0px auto;
  position: relative;
  animation-name: ${FadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: reverse;
`;

export default Main;
