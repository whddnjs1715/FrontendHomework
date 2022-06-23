import styled from 'styled-components';
import Logo from '../triple2x.jpg';

const ContentLogo = () => {
  return <ContentContainer className="triple_image">2021년 12월 기준</ContentContainer>;
};

const ContentContainer = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  text-align: center;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  background-image: url(${Logo});
  font-size: 15px;
  padding-top: 280px;
`;

export default ContentLogo;
