import styled from 'styled-components';
import Animation from '../hooks/Animation';
import appstore from '../appstore.png';
import playstore from '../playstore.png';

const AwardsContainer = () => {
  return (
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
  );
};

const Store = styled.div`
  margin: 50px 0px 140px 623px;
  animation-name: ${Animation};
  animation-duration: 900ms;
  animation-iteration-count: ;
  animation-direction: reverse;
`;
const Apple = styled.div`
  display: inline-block;
  background-image: url(${appstore});
  background-size: 54px 54px;
  background-repeat: no-repeat;
  padding: 5px 0px 5px 62px;
`;
const Android = styled.div`
  display: inline-block;
  background-image: url(${playstore});
  background-size: 54px 54px;
  background-repeat: no-repeat;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;
`;

export default AwardsContainer;
