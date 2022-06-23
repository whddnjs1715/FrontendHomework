import styled, { keyframes } from 'styled-components';
import triple from '../triple2x.jpg';
import appstore from '../appstore.png';
import playstore from '../playstore.png';

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

const Triple = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  text-align: center;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  background-image: url(${triple});
  font-size: 15px;
  padding-top: 280px;
`;

const Script = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

const Store = styled.div`
  margin: 50px 0px 140px 623px;
`;

const Apple = styled.div`
  display: inline-block;
  background-image: url(${playstore});
  background-size: 54px 54px;
  background-repeat: no-repeat;
  padding: 5px 0px 5px 62px;
`;
const Android = styled.div`
  display: inline-block;
  background-image: url(${appstore});
  background-size: 54px 54px;
  background-repeat: no-repeat;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;
`;

const Main = () => {
  return (
    <Container className="container">
      <Inner className="inner">
        <Triple className="triple_image">2021년 12월 기준</Triple>
        <Script className="script">
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
        </Script>
        <Store className="appleAndroid">
          <Android className="playstore">
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </Android>
          <Apple className="appstore">
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </Apple>
        </Store>
      </Inner>
    </Container>
  );
};

export default Main;
