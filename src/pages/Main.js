import styled from 'styled-components';
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

const Container = styled.div`
  min-width: 1200px;
`;

const Inner = styled.div`
  margin: 0px auto;
  position: relative;
`;

export default Main;
